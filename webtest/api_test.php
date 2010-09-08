<?php
class TestOfApi extends WebTestCase {
    
    function testHomepage() {
        $this->get('http://localhost:3000');
		$this->assertResponse(200);
    }

	function testCreateUser(){
		// setup
		$params = array(
			'first' => 'Davy',
			'last' => 'Jones',
			'age' => '600'
		);
		// act
		$this->post('http://localhost:3000/user', $params);
		// assert
		$this->get('http://localhost:3000/user/davy');
		$this->assertResponse(200);
		$this->assertText('davy Jones');
	}

}
?>