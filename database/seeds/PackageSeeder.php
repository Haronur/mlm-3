<?php

use Illuminate\Database\Seeder;
use Carbon\Carbon;

class PackageSeeder extends Seeder
{
    /**
     * Run the database seeds.
     *
     * @return void
     */
    public function run()
    {
        $packages = [
            [
                'package_amount' => 10,
                'direct_percent' => 5,
                'group_level'   =>  0,
                'purchase_point' =>  50,
                'max_share_sale' => 40,
                'share_limit' =>  10
            ],
            [
                'package_amount' => 50,
                'direct_percent' => 10,
                'group_level'   =>  3,
                'purchase_point' =>  50,
                'max_share_sale' => 200,
                'share_limit' =>  50
            ],
            [
                'package_amount' => 100,
                'direct_percent' => 10,
                'group_level'   =>  3,
                'purchase_point' =>  50,
                'max_share_sale' => 400,
                'share_limit' =>  100
            ],
            [
                'package_amount' => 250,
                'direct_percent' => 15,
                'group_level'   =>  5,
                'purchase_point' => 60,
                'max_share_sale' => 1250,
                'share_limit' =>  250
            ],
            [
                'package_amount' => 500,
                'direct_percent' => 15,
                'group_level'   =>  5,
                'purchase_point' =>  60,
                'max_share_sale' => 2500,
                'share_limit' =>  500
            ],
            [
                'package_amount' => 750,
                'direct_percent' => 15,
                'group_level'   =>  7,
                'purchase_point' =>  60,
                'max_share_sale' => 3500,
                'share_limit' =>  750
            ],
            [
                'package_amount' => 1000,
                'direct_percent' => 15,
                'group_level'   =>  10,
                'purchase_point' =>  70,
                'max_share_sale' => 6000,
                'share_limit' =>  1000
            ],
            [
                'package_amount' => 2000,
                'direct_percent' => 20,
                'group_level'   =>  10,
                'purchase_point' =>  70,
                'max_share_sale' => 12000,
                'share_limit' =>  2000
            ],
            [
                'package_amount' => 3000,
                'direct_percent' => 20,
                'group_level'   =>  10,
                'purchase_point' =>  70,
                'max_share_sale' => 18000,
                'share_limit' =>  3000
            ],
            [
                'package_amount' => 5000,
                'direct_percent' => 20,
                'group_level'   =>  10,
                'purchase_point' =>  70,
                'max_share_sale' => 30000,
                'share_limit' =>  5000
            ]
        ];

        foreach ($packages as $package) {
        	$package['created_at'] = Carbon::now();
        	$package['updated_at'] = Carbon::now();
        	\DB::table('Package')->insert($package);
        }
    }
}
