<?php
    require_once('simpletest/web_tester.php');
    require_once('simpletest/reporter.php');
    
    $test = &new GroupTest('Web site tests');
    $test->addTestFile('api_test.php');
    exit ($test->run(new TextReporter()) ? 0 : 1);
?>