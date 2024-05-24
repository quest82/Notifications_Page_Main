const markAsRead = document.querySelector('.mark_as_read')
const newNotifications = document.querySelectorAll('.new_notifications')
const newNotificationsSign = document.querySelectorAll('.new_notifications_sign')

console.log(newNotifications, newNotificationsSign);
markAsRead.addEventListener('click', e => {

    newNotifications.forEach(tag => {
        tag.classList.remove('new_notifications')
    })
    newNotificationsSign.forEach(tag => {
        tag.classList.remove('new_notifications_sign')
    })
} )