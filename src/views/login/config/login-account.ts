export const rule = {
  user: [
    {
      required: true,
      message: '用户名不能为空',
      trigger: 'blur'
    },
    {
      pattern: /^[a-z0-9]{6,10}$/,
      message: '用户名必须是6~12位字母或数字',
      trigger: 'blur'
    }
  ],
  pwd: [
    {
      required: true,
      message: '密码不能为空',
      trigger: 'blur'
    },
    {
      pattern: /^[a-z0-9]{6,10}$/,
      message: '密码必须是6~12位字母或数字',
      trigger: 'blur'
    }
  ]
}
