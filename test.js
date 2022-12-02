import assert from 'assert';
import { fizzBuzz } from './fizzbuzz';

function testFizzBuzz():void {
    assert.equal(fizzBuzz(3), 'fizz',);
    assert.equal(fizzBuzz(5), 'buzz');
    assert.equal(fizzBuzz(15), 'fizzbuzz');
    assert.equal(fizzBuzz(21), 'fizz hello world!');
}

testFizzBuzz();
