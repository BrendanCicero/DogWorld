const dog = [
    {
        name: 'Border Collie',
        detail: 'Anjing yang senang bermain bola, bermain dengan orang dewasa maupun anak kecil. Mempunyai sifat yang atletis dan juga cerdas. Anjing ini juga sering dipelihara oleh peternak di daerah Eropa untuk membantu menggembalakan domba.'
    },
    {
        name: 'Basset Hound',
        detail: 'Salah satu jenis yang cukup sulit dilatih dan keras kepala, tetapi memiliki sifat yang santai, kepekaan yang tinggi, penciuman yang kuat dibanding anjing lain, serta baik hati.'
    },
    {
        name: 'Shiba Inu',
        detail: 'Berasal dari Jepang, mempunyai ukuran tubuh yang cukup kecil. Salah satu sifat dari anjing ini cukup unik, yaitu ramah kepada kucing, walaupun juga memiliki sifat agresif dan temperamen.'
    },
    {
        name: 'Golden Retriever',
        detail: 'Anjing yang dikenal setia, penyabar, dan juga penyayang. Sering dijadikan sebagai teman untuk berburu karena dapat mendeteksi obat terlarang dan misi penyelematan.'
    },
    {
        name: 'Poodle',
        detail: 'Memiliki penampilan yang cantik dengan bulu yang unik yang dapat memenuhi matanya. Anjing ini memiliki insting yang tajam, kecerdasan yang luar biasa, ceria dan juga aktif.'
    },
    {
        name: 'Chow Chow',
        detail: 'Salah satu anjing yang mandiri dan juga cukup pendiam. Anjing ini disebut berasal dari China, memiliki lidah yang gelap, dan tidak terlalu suka dengan air.'
    },
    {
        name: 'Siberian Husky',
        detail: 'Jenis anjing yang memiliki bulu yang tebal dan mata biru. Pada umumnya, anjing ini setia dan penurut. Berasal dari Siberia, Rusia dekat dengan kutub sehingga anjing ini mampu hidup di suhu dingin yang ekstrem.'
    },
    {
        name: 'Shih Tzu',
        detail: 'Berkepribadian ramah, mudah bergaul, pintar, serta senang bermain. Memiliki bulu yang lebat di moncong dan dadanya serta mata yang berwarna gelap. Cocok untuk dijadikan peliharaan.'
    },
    {
        name: 'Pomeranian',
        detail: 'Bertubuh mungil dan cukup memiliki bulu yang lebat. Mempunyai wajah yang imut dan sangat cocok dijadikan teman bermain dengan anak-anak.'
    },
    {
        name: 'Cihuahua',
        detail: 'Ras anjing paling kecil dan memiliki bulu yang pendek bahkan hampir botak. Perawatan kesehatan anjing ini harus diperhatikan karena cukup rentan terhadap kejang-kejang dan epilepsi.'
    }
];

const images = document.querySelectorAll('img');

for (const image of images) {
    // Fungsi untuk menampilkan nama anjing beserta deskripsinya
    image.addEventListener('click', function(event) {
        const target = event.target;
        let detail = document.querySelector('.detail');
        let heading = document.querySelector('.heading');
        let text = document.querySelector('.text');

        detail.innerHTML = '';

        for (let i = 0; i < images.length; i++) {
            if(target.getAttribute('name') === dog[i].name){
                heading.innerText = dog[i].name;
                text.innerText = dog[i].detail;
    
                detail.appendChild(heading);
                detail.appendChild(text);
            }
        }
    })
}