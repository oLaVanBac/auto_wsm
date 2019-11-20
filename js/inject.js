var answer_url = Settings.core_value.fitm_host + '/core_values/questions/valid_answer';
var answer = {
  question_id: 3393,
  answer_ids: [11725]
};

var timer = null;

function auto_answer() {
  $.post(answer_url, answer).done(function(res) {
    if (!res.data.status) {
      clearInterval(timer);
      $('#captcha-msg').html(
        'Extension bị lỗi, bạn tự trả lời nha ' +
        '<img src="https://s.yimg.com/lq/i/mesg/emoticons7/20.gif">'
      ).removeClass('hidden');
      return;
    }

    let src = timer ? 'https://i.imgur.com/lpCFCsT.png' : 'https://i.imgur.com/w4t30W4.gif';

    $('#token-core-value').val(res.data.token);
    $('.capcha-wrap').html(
      '<p class="text-center" style="margin-top: 15px;">' +
      '<strong>Tự động trả lời thành công</strong> ' +
      '<img width="70" src="' + src + '">' +
      '</p>'
    );
    $('.capcha-wrap').append(
      '<i>À nếu vẫn không đăng nhập được thì gỡ extension ra ' +
      'và chờ <a href="https://github.com/baclv">@baclv</a> cập nhật lại nhé ' +
      '<img src="https://chatpp.thangtd.com/img/emoticons/giggle.gif"></i>'
    );

    timer = setInterval(auto_answer, Settings.core_value.captcha_timeout);  
  });
}

$('.btn-login').click(auto_answer);
