let currentBanner = 0;
cont banners = 
document.querySelctorAll('.banner');

function showBanner(index){
	banners.forEach(banner => banner.style.display ='none ');
	banners[index].style.display = 'block';

}

function rotateBanners(){
	currentBanner =(currentBanner + 1) % banners.length;
	showBanner
	(currentBanner)

}

showBanner(currentBanner);

setinterval(rotateBanners, 30000);

