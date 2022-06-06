# 継続的デリバリー スプリント

[Google ドキュメント：継続的デリバリー スプリント](https://docs.google.com/document/d/e/2PACX-1vSihMamEggH81tWIDUiNWlVl3DUHykzU1iJjT8NAN-m3DdUnUedAKd6s7BmT_MYWo2mTjnGnSdGr5cJ/pub)

[Heroku CD パイプラインの補足ノート](https://docs.google.com/document/d/e/2PACX-1vTqzX781-N3w1VgxVAJH9sBoFt8_Rf0DP5jpgsqeHr3xm7YExTDelrg795wJBNvFRYz0XLTA3pjMcII/pub)

プロジェクトインセプションのミーティング

- [英語](https://www.infoq.com/articles/project-inception-meeting/)
- [日本語](https://www.infoq.com/jp/articles/project-inception-meeting/?itm_source=infoq_en&itm_medium=link_on_en_item&itm_campaign=item_in_other_langs)

## ⚠️ Heroku セットアップに関する注意事項 ⚠️

Heroku 上にデプロイしたアプリケーションが Heroku Postgres データベースに接続するためには、SSLで通信を行う必要があります。
そのため、Heroku の環境変数に下記の設定を追加して、SSL通信を有効にしてください。

```
PGSSLMODE=no-verify
```

データベース接続時にクエリパラメータをデータベースURLに追加して、SSL通信を有効にする方法もあります。
詳しくは下記のドキュメントをご覧ください。

- [Connecting to Heroku Postgres Databases from Outside of Heroku](https://devcenter.heroku.com/articles/connecting-to-heroku-postgres-databases-from-outside-of-heroku#ssl)
- [Connecting in Node.js](https://devcenter.heroku.com/articles/heroku-postgresql#connecting-in-node-js)