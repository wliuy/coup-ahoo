# Coup Ahoo (阿胡起义)

> 一款扮演叛变船长、挑战船员、征服大海的骰子冒险游戏。

![游戏截图](https://user-images.githubusercontent.com/1301397/65502690-34a36f00-de94-11e9-9154-186e927c6d48.png)

## 一键部署到 Cloudflare Pages

通过以下三个简单的步骤，即可将此游戏部署到您自己的免费网站上。

### 第 1 步：开始部署

点击下面的按钮，它会带您进入 **Cloudflare Pages** 的正确创建流程，并尝试预填您的项目信息：

[![部署到 Cloudflare Pages](https://static.cloudflareinsights.com/pages/media/pages-button.svg)](https://dash.cloudflare.com/pages/new/wliuy/coup-ahoo)

### 第 2 步：配置构建

在设置页面，Cloudflare会要求您确认构建配置。**这是最关键的一步**，请确保信息填写无误：

* **构建命令 (Build command):**
    ```
    npm run build
    ```
* **构建输出目录 (Build output directory):**
    ```
    dist
    ```

### 第 3 步：完成

点击 **“保存并部署” (Save and Deploy)**。

稍等片刻，Cloudflare完成构建后，您的游戏就成功上线了！


## 游戏简介

Coup Ahoo（阿胡起义）是一款操作简单、轻松上手的小游戏，全程仅需鼠标或触屏（支持移动端）。

玩家将扮演一位发动叛变的船长，逐一挑战并击败13名手下。在冒险途中，还会遇到商人、船匠、想加入你的船员，助你一举登顶海上霸主之位。

本项目最初为2019年的js13kGames编程竞赛而创建。

## 核心玩法

* **🎲 骰子即是生命与力量**: 游戏中的骰子代表了你的“货物”。所有骰子的点数总和，既是你的**总生命值 (HP)**，也决定了你在战斗中能造成的**伤害**。

* **💪 征服船员**: 你需要利用你的骰子点数，挑战并击败13名强大的手下。

* **💥 避开“13”**: 务必小心！在游戏中要尽量避开“13”这个不祥的数字，否则可能会招致意想不到的不利后果。
