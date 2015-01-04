<?php

class FullPrintR {

	private $indent = '';
	private $i = 0;
	private $out = '';

	public function getIndex()
	{
		$this->getVarsRec(
			[
				'0' =>
					'hggr',
				'1' =>
					[
						'1.0' =>
							[
								'1.0.0' =>
									'khkh',
								'1.0.1' =>
									'jkhlk',
								'1.0.2' =>
									[
										'1.0.2.0' => 1,
										'1.0.2.1' => 2,
										'1.0.2.2' => 3,
									]
							]
					],
				'2' =>
					['yyy' => ['kjhkj' => 878]],
				'3' =>
				['']

			]
		);
		//print $this->out;

		return View::make('comments')
			->with(['page' => 'comments','one' => 1, 'two' => $this->out, 'three' => ['rr', 'tt']]);
	}

	public function getString() {

	}

	/**
	 * @param array $val
	 * @return string
     */
	protected function getVarsRec($val) {
		$val = is_array($val) ? $val : [$val];
		foreach ($val as $k => $v) {
			if (is_array($v)) {
				$this->out .= "{$this->indent}{$k} => \n<br/>";
				$this->indent .= ' -- ';
				$this->getVarsRec($v);
			} else {
				$this->out .=  "{$this->indent}{$k} => {$v}\n<br/>";
			}
			if (count($val) == 1) $this->indent = '';
		}
	}

}

$A = new FullPrintR();
$A->getString();