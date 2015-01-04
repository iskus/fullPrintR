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
				[]

			]
		);
		//print $this->out;

		return View::make('comments')
			->with(['page' => 'comments','one' => 1, 'two' => $this->out, 'three' => ['rr', 'tt']]);
	}

	public function getString() {

	}

	protected function getVarsRec($val) {
			foreach ($val as $k => $v) {
				$this->i++;
				if (is_array($v)) {
					$this->out .= $this->sp.$k." => \n<br/>";
					$this->sp .= '-';
					$this->getVarsRec($v);
				} else {
					$this->i = 0;
					$this->out .=  "{$this->sp}{$k} => {$v}\n<br/>";
				}
				if ($this->i == count($val) - 1)
					$this->sp = substr($this->sp, -1, $this->i);
			}
	}

}

$A = new