[![Build Status](https://travis-ci.org/nkjm/mecabaas-client.svg?branch=master)](https://travis-ci.org/nkjm/mecabaas-client)

# 概要

[MeCab](http://taku910.github.io/mecab/)および[mecab-ipadic-NEologd](https://github.com/neologd/mecab-ipadic-neologd/blob/master/README.ja.md)による日本語テキストの形態素解析をクラウドサービスとして利用するためのライブラリです。

mecab-ipadic-NEologdを辞書として利用した形態素解析は素晴らしいパフォーマンスを発揮し、その解析結果は極めて有用です。
一方、MeCabやmecab-ipadic-NEologdは一般的なnode.jsのPaaSの実行環境では組み込まれておらず、利用するには独自に実行環境をコンパイルする必要があります。
このコンパイル作業はPaaS利用者にとってはできれば避けたい作業であり、特にmecab-ipadic-NEologdはコンパイルに相当量の空きメモリを必要とするため、コンパイル自体が難しかったりします。

このmecabaas-clientはリモートのAPIを通じて解析をおこなうため、個々のnode.js実行環境にはMeCabおよびmecab-ipadic-NEologdをインストールする必要がありません。開発者はすぐにテキストを解析することができます。

*ただし、このライブラリが利用しているクラウドサービスは永続的に稼働している保証はなく、主にテスト目的での利用を想定しているため本番環境での利用には適しません。また、mecab-ipadic-NEologdは毎月データを更新されるという方針ですが、このライブラリが利用しているサービスではそんなに頻繁にデータは更新されない予定です。ご注意ください。*

# インストール

```
$ npm install mecabaas-client
```

# 利用方法

```
const mecab = require('mecabaas-client');

mecab.parse('メロンパンを食べました。')
.then(
    function(response){
        console.log(response);
    },
    function(error){
        console.log(error);
    }
);

mecab.wakachi('メロンパンを食べました。')
.then(
    function(response){
        console.log(response);
    },
    function(error){
        console.log(error);
    }
);
```

# ライセンスと著作権

- mecabaas-clientはMITライセンスで公開しています。
- mecab-ipadic-NEologdは[Toshinori Sato氏](https://github.com/overlast)の著作物です。
