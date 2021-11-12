# TypeScriptSample
TypeSciptの勉強用環境

## 初期化(npm)

npm プロジェクトを作成する

```
$ docker-compse run --rm node npm init -y
```

`src/package.jspn` が作成される

## ライブラリ

TypeScriptの開発に必要な各種コマンドをインストールする

```
# node-js
$ docker-compose run --rm node npm install -D typescript @types/node ts-node ts-node-dev rimraf npm-run-all

# webpack
$ docker-compose run --rm node npm install -D webpack webpack-cli typescript ts-loader rimraf npm-run-all
```
`src/package-lock.json` と `src/node_modules` が作成される

## バージョン確認

```
$ docker-compose run --rm node npx tsc --version
Version 4.4.4
```

## 単体テスト環境を用意する

jestをインストールする

```
$ docker-compose run --rm node npm install --save-dev jest ts-jest @types/jest typescript
```

## 単体テストの実行

```
# コンパイル
$ docker-compose exec node npx tsc

# テストの実行
$ docker-compose exec node npm t
```

## 参考情報

- [dockerでTypeScriptをいじれる環境を作る](https://qiita.com/reflet/items/538753d5dcf3560567a9)
- [TypeScript の単体テストで Jest 使おう](https://qiita.com/okazuki/items/991a068892e946531612)
