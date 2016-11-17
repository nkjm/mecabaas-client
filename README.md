# 概要

mecabaasで提供されるAPIにアクセスするためのクライアントライブラリです。
MeCabおよびmecab-ipadic-NElogdで日本テキストを形態素解析し、その結果をJSONフォーマットで受け取ることができます。
リモートのAPIを通じて解析をおこなうためこのクライアントライブラリをインストールするnode.jsの実行環境にはMeCabをインストールする必要がありません。

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
