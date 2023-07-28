import React from 'react'
import Counter from '../../components/counter/Counter'
import Yandexmaps from '../../components/yandexmaps/Yandexmaps'
import './about.css'

function About() {
  return (
    <>
      <div className="about-banner-wrap banner-space about-us-bg">
        <div className="container">
          <div className="row">
            <div className="col-lg-8 m-auto">
              <div className="about-banner-content text-center">
                <h1 className="mb-15 text-white">Uznauka.uz</h1>
                <h5 className="font-weight--normal text-white">“UzNauka” kompaniyasi – ilmiy xizmatlar sohasida yuqori mavqega ega kompaniya bo‘lib, O‘zbekistonda ilm-fan va innovatsiyalarni keng targ’ib qiluvchi akademik platforma hisoblanadi. </h5>
              </div>
            </div>
          </div>
        </div>
      </div>
     
      <div className="about-info">
        <div className="container">
          <h4 className='text-center mb-4'>“UzNauka” kompaniyasi </h4>
          <p><b> “UzNauka” kompaniyasi</b> O‘zbekiston Respublikasi Oliy ta’lim, fan va innovatsiyalar vazirligi huzuridagi Oliy attestatsiya komissiyasi (OAK) tomonidan ilmiy tadqiqotlar natijalarini chop etish tavsiya etilgan bir qancha sifatli ilmiy nashrlarni o’zida jamlagan. </p>
          <p><b> Kompaniyaning asosiy maqsadi </b>– mamlakatimizda hamda xorijda ilm-fan, ta’lim va innovatsiyalarga oid ilmiy yangiliklarni ilm ahliga yetkazishda vositachi sifatida xizmat ko’rsatishdan iboratdir.</p>
          <p>Bundan tashqari kompaniyamiz O‘zbekiston Respublikasi va dunyoda barcha sohalardagi ilmiy holatni, ilmiy yangiliklarni, qonunchilikdagi yangiliklardan davlat muassasalari va dunyo jamoatchiligini xabardor qilish, O‘zbekiston Respublikasi turli sohalardagi olimlar va amaliyotchilarning ilmiy tadqiqotlarini yoritish, mamlakatda amalga oshirilayotgan ijtimoiy munosabatlarning ilmiy asosini yaratish va takomillashtirish jarayoniga yaqindan ko‘maklashish, keng jamoatchilikning ilmiy savodxonligini oshirishga xizmat qiladi.</p>
          <h4 className='text-center mb-4'>Kompaniyaning asosiy vazifalari:</h4>
          <ul>
            <li>•	O‘zbekiston Respublikasi barcha sohalarida ilmiy tahlil qilish, ularni takomillashtirish yuzasidan ishlab chiqilgan takliflarni yoritish;</li>
            <li>•	O‘zbekiston Respublikasining ilmiy yangiliklarni xorijiy mamlakatlar ilmiy jamoatchiligi bilan ilmiy-qiyosiy tahlilini yoritib borish;</li>
            <li>•	O‘zbekiston Respublikasi ilm-fan sohalaridagi olimlar va amaliyotchilarning ilmiy tadqiqotlarini yoritish; </li>
            <li>•	mamlakatda amalga oshirilayotgan siyosiy, ijtimoiy-iqtisodiy, huquqiy va ilm-fan va innovatsiyalarga oid islohotlar mohiyatini keng yoritib borish;</li>
            <li>•	xalqaro miqyosda tan olingan xorijiy mamlakatlar olimlari, amaliyotchilarni hamkorlikka jalb qilish;</li>
            <li>•	yuqori saviyadagi ilmiy nazariy, tahliliy materiallarni tayyorlash va nashr etish;</li>
            <li>•	xorijiy mamlakatlar tajribasini, ularning ilmiy ishlanmalarini milliy islohotlarimiz doirasida tatbiq etishning dolzarb muammolarini yoritish.</li>
          </ul>
          <p><b> Ilmiy nashrtlarning ixtisoslashuvi: </b>turli sohalarda ilmiy-tahliliy yo‘nalishdagi materiallarni chop etib borish.</p>
          <p><b> Ilmiy nashrtlarning davriyligi:  </b>Jurnal har oyda bir marotaba, bir yil davomida jami 12 ta sonda nashr etilib, internet jahon axborot tizimi orqali akademik maydonga tarqatiladi. Shuningdek, navbatdan tashqari maxsus sonlar chop etishga ruxsat etiladi.</p>
        </div>
      </div>
      <Counter />
      <div className=" form-component mt-5">
        <div className="container">
          <h4 className='text-center mb-5'>Bizga murojat qiling</h4>
          <div className="row">
            <div className="col-md-6">
              <form>
                <label for="validationCustom01" className="form-label mt-2">Ism</label>
                <input type="text" className="form-control" id="validationCustom01" required />

                <label className="form-label mt-2">Familiya</label>
                <input type="text" className="form-control" id="validationCustom02" required />

                <label for="validationCustom03" className="form-label mt-2">Telefon raqam</label>
                <input type="text" className="form-control" id="validationCustom03" required />

                <label for="validationCustom04" className="form-label mt-2">Taklif va fikrlar</label>
                <textarea className="form-control" id="validationCustom04" style={{ height: "100px" }} required ></textarea>


                <button className=" contact-btn-primary mt-4" type="submit">Yuborish</button>
              </form>
            </div>
            <div className="col-md-6">
              <div className="contact-img text-center">
                <Yandexmaps />
              </div>
            </div>
          </div>
        </div>
      </div>
      

    </>
  )
}

export default About