<?php

return [
	'withdrawAdminFee'	=>	5, // in percent
	'bonus'	=>	[
		'group'		=>	1, // in percent
		'override'	=>	12, // in percent
		'pairing'	=>	500, // in USD
		'calculation' => [ // in percent
			'cash'	=>	80,
			'promotion'	=>	20
		],
	],
	'shares' => [
		'sellRange'	=>	0.003,
		'sellValue' => [ // all values in percent
	        'cash'  =>  60,
	        'buyBack'   =>  20,
	        'promotion' =>  15,
	        'fee'   =>  5,
	    ]
	],
	'countries' => [
		'Cambodia' => [
			'currency'	=>	'KHR',
			'buy'	=>	'5700.00',
			'sell'	=>	'4500.00',
			'banks'	=>	[
				'Public Bank',
				'MayBank',
				'ACLEDA Bank'
			]
		],
		'Indonesia'	=>	[
			'currency'	=>	'IDR',
			'buy'	=>	'18200.00',
			'sell'	=>	'15000.00',
			'banks'	=>	[
				'BCA Bank',
				'Mandiri Bank'
			]
		],
		'Philippines'	=>	[
			'currency'	=>	'PHP',
			'buy'	=>	'70.00',
			'sell'	=>	'60.00',
			'banks'	=>	[
				'RCBC Bank',
				'BPI Bank',
				'Metro Bank',
				'BDO Bank',
				'Land Bank of the Phillipines',
				'PNB Phillipines'
			]
		],
		'Thailand'	=>	[
			'currency'	=>	'THB',
			'buy'	=>	'46.00',
			'sell'	=>	'37.00',
			'banks'	=>	[
				'TMB Bank',
				'Krungsri Bank',
				'Kasikom',
				'Siam Commercial Bank',
				'Siam City Bank',
				'Bangkok Bank'
			]
		],
		'Vietnam'	=>	[
			'currency'	=>	'VND',
			'buy'	=>	'32000.00',
			'sell'	=>	'26500.00',
			'banks'	=>	[
				'ABC Asia Pacific',
				'VietComBank',
				'BIDV Bank'
			]
		],
		'China'	=>	[
			'currency'	=>	'CNY',
			'buy'	=>	'9.00',
			'sell'	=>	'7.80',
			'banks'	=>	[
				'ICBC Bank (工商银行)',
				'CMB Bank (招商银行)',
				'Bank of China (中国银行)',
				'ABC Bank (农业银行)'
			]
		],
		'Singapore'	=>	[
			'currency'	=>	'SGD',
			'buy'	=>	'2.00',
			'sell'	=>	'1.65',
			'banks'	=>	[
				'UOB Bank'
			]
		],
		'Malaysia'	=>	[
			'currency'	=>	'MYR',
			'buy'	=>	'6.00',
			'sell'	=>	'5.20',
			'banks'	=>	[
				'Maybank',
				'Public Bank',
				'CIMB Bank',
				'RHB Bank'
			]
		],
		'Taiwan'	=>	[
			'currency'	=>	'TWD',
			'buy'	=>	'42.00',
			'sell'	=>	'36.00',
			'banks'	=>	[
				'CTBC Bank (中国信托商业银行)',
				'Bank of Taiwan (台湾银行)',
				'Esun Bank (玉山银行)'
			]
		],
	]
];