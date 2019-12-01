const resolveCaptcha = 'https://cloud.labac.name.vn/captcha'
const refreshCaptcha = 180000

const reset = _ => {
  $('#recaptcha-checkbox').removeClass('recaptcha-processing hidden')
  $('#recaptcha-checkmark').addClass('hidden')
}

const beforeLoad = _ => {
  $('#recaptcha-checkbox').addClass('recaptcha-processing').removeClass('hidden')
  $('#recaptcha-checkmark').addClass('hidden')
  $('#recaptcha-title').unbind()
}

const afterLoad = _ => {
  $('#recaptcha-checkbox').removeClass('recaptcha-processing').addClass('hidden')
  $('#recaptcha-checkmark').removeClass('hidden')
}

const setTokenValue = token => {
  $('#token-core-value').val(token || '')

  token || reset()
}

const autoAnswer = async _ => {
  try {
    beforeLoad()
    let { token } = await $.get(resolveCaptcha)
    afterLoad()

    setTokenValue(token)
  } catch(error) {
    console.log(error)
    reset()
  }

  setTimeout(autoAnswer, refreshCaptcha)  
}

$('.btn-login').one('click', autoAnswer)

$('<a/>', {
  href: 'https://git.io/baclv',
  text: 'AutoWSM v1.0.2 by @BacLV',
  target: '_blank'
}).prependTo('.forgot-password')
