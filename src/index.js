import '!style-loader!css-loader!bootstrap/dist/css/bootstrap.css'
import $ from 'jquery'
import styles from './style.css'
import list from './list.js'

list.createDom()

document.getElementById("change-button").addEventListener("click", function( event ) {
    list.changeDom()
    return false;
}, false)
