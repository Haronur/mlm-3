<?php

namespace App\Console\Commands;

use Carbon\Carbon;
use Illuminate\Console\Command;
use App\Models\SharesQueue;

class FollowSharesCommand extends Command
{
    /**
     * The name and signature of the console command.
     *
     * @var string
     */
    protected $signature = 'shares:follow';

    /**
     * The console command description.
     *
     * @var string
     */
    protected $description = 'Process follow shares';

    /**
     * Create a new command instance.
     *
     * @return void
     */
    public function __construct()
    {
        parent::__construct();
    }

    /**
     * Execute the console command.
     *
     * @return mixed
     */
    public function handle()
    {
        $state = \Cache::remember('shares.state', 60, function () {
            return \DB::table('Shares_Centre')->first();
        });

        if (!$state->always_follow) return false;

        $carbon = Carbon::now();
        $now = $carbon->toDateTimeString();

        $shares = SharesQueue::where('is_queued', 0)
        ->where('activated_at', '<=', $now)
        ->get();

        $faker = \Faker\Factory::create();

        foreach ($shares as $share) {
            $followers = $state->follow_random ? mt_rand(1, 3) : $state->follow_amount;
            $total = $share->amount;
            $amounts = [];
            $sum = 0;

            if ($state->always_follow) {
                $amounts[0] = floor($state->follow_percent / 100 * $share->amount);
                $sum += $amounts[0];
                $followers -= 1;
            }

            if ($followers > 0) {
                for ($index=$followers; $index; --$index) {
                    if (!isset($amounts[$index])) {
                        $max = $total - $sum - $index;
                        $sum += $amounts[] = mt_rand(1, $max);
                    }
                }
                $amounts[] = $total - $sum;
            }

            if (count($amounts) > 0) {
                foreach ($amounts as $amount) {
                    \DB::table('Shares_Sell')->insert([
                        'amount' => $amount,
                        'amount_left' => 0,
                        'username' => $faker->username,
                        'share_price' => $share->share_price,
                        'is_follow' => 1,
                        'has_process' => 1,
                        'is_admin' => 0,
                        'created_at' => Carbon::now(),
                        'updated_at' => Carbon::now()
                    ]);
                }

                $share->is_queued = 1;
                $share->save();
            }
        }
    }
}
