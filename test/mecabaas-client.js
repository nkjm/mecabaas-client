'use strict';

const chai = require('chai');
const chaiAsPromised = require('chai-as-promised');
chai.use(chaiAsPromised);
chai.should();
const mecab = require('../index');

describe('mecabaas-client', function(){
    describe('parse', function(){
        it('should return array(1) when the text is メロンパン', function() {
            return mecab.parse('メロンパン').should.eventually.deep.equal([["メロンパン","名詞","固有名詞","一般","*","*","*","メロンパン","メロンパン","メロンパン"]]);
        });
        it('should reject if text is not set', function(){
            return mecab.parse('').should.be.rejected;
        });
    });
    describe('wakachi', function(){
        it('should return array(1) when the text is メロンパン', function() {
            return mecab.wakachi('メロンパン').should.eventually.deep.equal(["メロンパン"]);
        });
        it('should reject if text is not set', function(){
            return mecab.wakachi('').should.be.rejected;
        });
    });
});
