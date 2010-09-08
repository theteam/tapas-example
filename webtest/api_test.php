<?php
class TestOfApi extends WebTestCase {
    
    function testHomepage() {
        $this->get('http://localhost:3000');
		$this->assertResponse(200);
    }
}
?>