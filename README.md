# Coup Ahoo (阿胡起义)

> 一款扮演叛变船长、挑战船员、征服大海的骰子冒险游戏。

![游戏截图](https://user-images.githubusercontent.com/1301397/65502690-34a36f00-de94-11e9-9154-186e927c6d48.png)

## 一键部署

[![使用 Cloudflare 进行部署](https://deploy.workers.cloudflare.com/button)](https://deploy.workers.cloudflare.com/deploy?repo=https://github.com/wliuy/coup-ahoo)

您无需任何开发环境。点击上方的 "Deploy with Cloudflare" 按钮，即可将此游戏一键部署到您自己的Cloudflare Pages账户，拥有一个永久免费的在线网址。

在弹出的Cloudflare设置向导中，您会被要求确认项目的构建配置。请确保填写以下信息：

* **构建命令 (Build command):**
    ```
    npm run build
    ```
* **构建输出目录 (Build output directory):**
    ```
    dist
    ```

## 游戏简介

Coup Ahoo（阿胡起义）是一款操作简单、轻松上手的小游戏，全程仅需鼠标或触屏（支持移动端）。

玩家将扮演一位发动叛变的船长，逐一挑战并击败13名手下。在冒险途中，还会遇到商人、船匠、想加入你的船员，助你一举登顶海上霸主之位。

本项目最初为2019年的js13kGames编程竞赛而创建。

## 核心玩法

* **🎲 骰子即是生命与力量**: 游戏中的骰子代表了你的“货物”。所有骰子的点数总和，既是你的**总生命值 (HP)**，也决定了你在战斗中能造成的**伤害**。

* **💪 征服船员**: 你需要利用你的骰子点数，挑战并击败13名强大的手下。

* **💥 避开“13”**: 务必小心！在游戏中要尽量避开“13”这个不祥的数字，否则可能会招致意想不到的不利后果。
