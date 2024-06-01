let counter = 1;

function recepts() {
    let div = document.getElementById('content');
    div.innerHTML = 'Классический борщ (красный борщ) – это знаменитый свекольный суп, которым по праву могут гордиться народы восточной и центральной Европы. Особенно древнюю историю борщ со свеклой имеет в Украине, поэтому часто его называют украинским борщом. Но есть еще и борщ литовский, польский, русский, кубанский, московский и даже сибирский. И варят его по-разному в каждом отдельном регионе да еще и с вариантами: мясной, постный, а летом и холодный борщ, который часто называют холодником, свекольником... Объединяет главное – везде, где готовят борщ, он относится к самым любимым кулинарным блюдам. А умение вкусно готовить настоящий борщ в этих краях считается одним из основных добродетелей женщины, почти не уступая красоте и доброте. Поэтому приготовление борща – это некое таинство, а сам борщ для славян – один из главных афродизиаков. Вкусное это слово – борщ!' + 
      'Зелёный борщ – это щавелевый суп, тоже блюдо национальных кухонь восточной Европы. Зелёный борщ не является разновидностью классического борща, имеет совершенно другую рецептуру и совсем другой цвет – зелёный. Он получается от щавеля и других зеленых ингредиентов.';
    
    document.getElementById('content').style.cssText = 'background-color: rgb(104, 102, 98, 0.7); background-color: rgb(104, 102, 98, 0.7); padding:28px; border-radius: 10px;';
}

function showVid() {
  document.getElementById("content").innerHTML = '<video controls width="250"><source src="videos/vid1.mp4" type="video/mp4" /></video>' +  '<video controls width="250"><source src="videos/vid2.mp4" type="video/mp4" /></video>'+ '<video controls width="250"><source src="videos/vid3.mp4" type="video/mp4" /></video>';
}


function connect(){
  counter += 1;
  if (counter % 2 == 0) {
    document.getElementById('networks').innerHTML = '<a type="button" href="https://vk.com/feed" class="link">ВКОНТАКТЕ</a>' + "<a type='button' href='https://web.telegram.org/a/' class='link'>ТЕЛЕГРАМ</a>";
  } 
  else {
    document.getElementById('networks').innerHTML = '';
  }

}