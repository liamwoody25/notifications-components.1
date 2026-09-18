const headerRemove = document.querySelector('.header-unread')
const notifyCard = document.querySelectorAll('.notify-card-marked')
const notifyIcon = document.querySelectorAll('.unmarked-circle')


function notitifcationsRead() {
  for (let i = 0; i < notifyCard.length; i+= 1) {
     notifyIcon[i].classList.remove('unmarked-circle')
     notifyCard[i].style.backgroundColor = '#ffff'
     notifyCard[i].style.boxShadow = 'none'
  }
  document.getElementById('notify-output').innerText = '0'
}




headerRemove.addEventListener('click', function(){
  notitifcationsRead()
})

  


