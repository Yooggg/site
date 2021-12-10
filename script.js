// ячейка <td> под курсором в данный момент (если есть)
//let currentElem = null;



function mouselog(event){
  let d = new Date();
  const elem = document.querySelector(".indicator");
  console.log(`${d.getHours()}:${d.getMinutes()}:${d.getSeconds()} | ${event.type} [target: ${event.target.id}]\n`.replace(/(:|^)(\d\D)/, '$10$2'));
  n = event.target.id;

  

  //var current_place =document.getElementById('10').getBoundingClientRect();
  //console.log(current_place);
  //let elem = document.getElementById('10');
  // elem.style.left = parseInt(elem.style.left)+ 70 +'px';
  // console.log(elem);
  //document.getElementById('10')=current_place.x + 70 * n;
}

function mouselog1(event){
  
  console.log(elem.style.display)
}

// const ind = document.getElementById('10');

// function mouselog(event){

//   if('mouseenter'){
//     var n = event.target.id;
//     console.log(n);

//     switch(n){
//       case '0':
//         let menu_id = document.getElementById('0');

//         break;
//       case '1':
//         let menu_id = document.getElementById('1');
//       break;
//       case '2':
//         let menu_id = document.getElementById('2');
//         break;
//       case '3':
//         let menu_id = document.getElementById('3');
//         break;
//       case '4':
//         let menu_id = document.getElementById('4');
//         break;
//     }

//     console.log()

//   }
  

//   menu_id.addEventListener('mouseenter', e => {
//     ind.style.left =+ 70 * n + 'px'; 
//   })
// }





// const list = document.querySelectorAll('.list');
// console.log(list);
// function handler(event){
//   if(list.onmouseover == true){
//     event.target.style.background = 'pink';
//   }
// }


// while (list.onmouseover){
//   list.forEach((item) =>
//   item.classList.remove('active'));
//   this.classList.add('active');
// }




// list.onmouseover = function(event) {
//   // перед тем, как войти на следующий элемент, курсор всегда покидает предыдущий
//   // если currentElem есть, то мы ещё не ушли с предыдущего <td>,
//   // это переход внутри - игнорируем такое событие
//   //if (currentElem) return;

//   this.classList.add('active');
//   //let target = event.target.closest('li');

//   // переход не на <td> - игнорировать
//   //if (!target) return;

//   // переход на <td>, но вне нашей таблицы (возможно при вложенных таблицах)
//   // игнорировать
//   //if (!table.contains(target)) return;

//   // ура, мы зашли на новый <td>
//   //currentElem = target;
//   //target.style.background = 'pink';

// //   function activeLink(){
// //     list.forEach((item) =>
// //     item.classList.remove('active'));
// //     this.classList.add('active');
// // }



//  // let target = event.target;
//  // target.style.background = 'pink';
// };


// list.onmouseout = function(event) {
//   // если мы вне <td>, то игнорируем уход мыши
//   // это какой-то переход внутри таблицы, но вне <td>,
//   // например с <tr> на другой <tr>
//   //if (!currentElem) return;

//   // мы покидаем элемент – но куда? Возможно, на потомка?
//   //let relatedTarget = event.relatedTarget;

//   //while (relatedTarget) {
//     // поднимаемся по дереву элементов и проверяем – внутри ли мы currentElem или нет
//     // если да, то это переход внутри элемента – игнорируем
//     //if (relatedTarget == currentElem) return;

//     //relatedTarget = relatedTarget.parentNode;
//   //}

//   // мы действительно покинули элемент
//   //currentElem.style.background = '';
//   //currentElem = null;


//   let target = event.target;
//   target.style.background = '';
// };
