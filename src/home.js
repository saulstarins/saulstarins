import React from 'react'
import Typical from "react-typical";
import {Link,NavLink} from 'react-router-dom'
const Home =() =>{
    return(
        <div className="container">

            <header className="App-header">
                <div>
                    <p className="Main-text">
                        <Typical
                            steps={[
                                'hey girly, boo, saulstariņ, princesīt..', 1200,
                                'patiesību sakot, man ir daudz ko teikt', 1200,
                                'bet es, kā jau nūģis, nevaru to pateikt dzīvē', 1200,
                                'tāpēc tam kalpos šis mazais projekts :)', 1200,
                                'šis gads ir bijis neaizmirstams', 1200,
                                'daudz kas ir noticis', 1200,
                                'protams, covid, darbs, skola un daudz kas cits', 1200,
                                'bet vislabākais un vissvarīgākais, kas ir noticis', 1200,
                                'esi tu', 1200,
                                'tas ka tu esi ienākusi manā dzīvē.', 1200,

                                'kaut kas tevī ir ļoti īpašs', 1200,

                                'es nezinu kas tieši', 1200,

                                'bet kaut kas noteikti', 1200,

                                'varbūt tās ir tavas zilās acis', 1200,

                                'vai arī tava apziņa (aka wokeness)', 1200,

                                'bet kaut kas noteikti ir', 1200,

                                'un tāpēc tu man esi bijusi ļoti, ļoti svarīga kopš pirmās dienas', 1200,

                                'nez..', 1200,

                                'prieks redzēt, ka cilvēks kā tu interesējas par cilvēku kā es.', 1200,

                                'mēs esam radījuši tik daudz neaizmirstamu atmiņu,', 1200,

                                'tik daudz pozitīvu, negatīvu un vienreizēju emociju.', 1200,

                                'tik daudz neatkārtojamu lietu..', 1200,

                                'tu man esi iemācījusi būt labākam cilvēkam', 1200,

                                'un par to es palikšu tev parādā visu savu dzīvi.', 1200,

                                'es nespēju vārdos izteikt cik ļoti pateicīgs es esmu', 1200,

                                'par tavu ierašanos un eksistenci.', 1200,

                                'sajūta, ka waterfests vel bija tik pirms pāris mēnešiem', 1200,

                                'bet, atceroties par visu, ko esam kopā sadarījuši', 1200,

                                'tiešām saprotu, ka ir pagājis dzīves labākais gads.', 1200,

                                'tās reizes kad kaitinājām kaimiņus ar pārāk skaļu mūziku nakts vidū,', 1200,

                                'vai kad kopā taisijām ēst, tetovējāmies un kopumā izklaidējāmies', 1200,

                                'šo visu es nekad, nekad neaizmirsīšu.', 1200,

                                'paldies', 1200,

                                'paldies tev par visu', 1200,

                                'lūdzu nekad nemainies', 1200,

                                'es ceru, ka tiksimies kad būsim vecāki', 1200,

                                'un tu būsi tieši tā paša meitene', 1200,

                                'kuru es iemīlēju 2019. gada 29. jūlijā', 1200,

                                '<3', 1200,

                            ]

                            }
                        />

                    </p>
                    <Link to="/shop" className="shop-link">SHOP</Link><br /><br /><br /><br />
                    <Link to="/lookbook" className="lookbook-link">LOOKBOOK</Link><br /><br /><br /><br />
                    <Link to="/about" className="about-link">ABOUT</Link><br /><br /><br /><br />
                    <Link to="/terms" className="terms-link">TERMS</Link><br /><br /><br />
                </div>
            </header>
        </div>
    )

}
export default Home;