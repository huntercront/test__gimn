$(document).ready(function () {

	if ($('section div').is('#map')) {
		var script = document.createElement("script");
		script.src = "https://api-maps.yandex.ru/2.1/?apikey=93fece7a-9fe4-47c6-80de-eaea41ec7d4a&lang=ru_RU";
		script.type = "text/javascript";
		script.onload = function () {
			// console.log('API Load');
			ymaps.ready(function () {
				var myMap = new ymaps.Map('map', {
					center: [55.74951156899046, 37.53708349999991],
					zoom: 16,
					controls: ['zoomControl'],
					behaviors: ['drag']
				}),

					// Создаём макет содержимого.
					MyIconContentLayout = ymaps.templateLayoutFactory.createClass(
						'<div style="color: #FFFFFF; font-weight: bold;">$[properties.iconContent]</div>'
					),

					myPlacemark = new ymaps.Placemark(myMap.getCenter(), {
						hintContent: '<div class="hint-map">Центр обеспечения государственных и муниципальных нужд </div>',
						balloonContent: '<div class="balloon-map"><img src="img/logo--icon.svg" class="balloon-map-icon">г. Москва, Пресненская набережная д. 12 этаж 13 (ММДЦ «Москва-Сити», «Башня Федерация»)</div>'
					}, {
							// Опции.
							// Необходимо указать данный тип макета.
							iconLayout: 'default#image',
							// Своё изображение иконки метки.
							iconImageHref: 'img/map--pin.svg',
							// Размеры метки.
							iconImageSize: [140, 140],
							iconImageOffset: [-70, -120]
						});
				myMap.geoObjects
					.add(myPlacemark)
				// .add(myPlacemarkWithContent);
			})
		};
		document.getElementsByTagName("head")[0].appendChild(script);
	}
});