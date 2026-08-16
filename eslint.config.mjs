import eslintConfigPrettier from 'eslint-config-prettier'
// @nuxt/eslint が .nuxt 配下に生成する設定を土台にする（`nuxt prepare` 実行後に生成される）
import withNuxt from './.nuxt/eslint.config.mjs'

export default withNuxt(eslintConfigPrettier)
