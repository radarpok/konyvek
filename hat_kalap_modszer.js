module.exports.stresszforrasok=()=>{
    const list = {
                1: "ha valaki érzelmi zsarolást használ mások befolyásolására",
                2: "kulcsszavak alapján való működés (csak a szavakra reagláni, és nem látni más perspektivából a dolgokat csakis érzelmi 'piros kalap' módban)",
                3: "saját maga kárára olyan szavakat használ valaki amiben áldozatként tünteti fel magát",
                4: "saját maga kárára olyan szavakat használ valaki amiben mások kizárólag 'támadók'",
                5: "siettetés, végül a siettetés okának tárgytalanítása",
                6: "önszitkozódás hallása",
                7: "ha valami kívülesik a hatáskörömön és ezaltál mástól függ az ügyem",
                8: "időkorlát alatt teljesíteni valamit, miközben fennáll a fenti tényezők egyike"
        },
    return console.log(list);
};

module.exports.six_hat_method=()=>{
    const list = {
            feher_kalap: {
                hasznalat: {
                mely_adatok_szuksegesek,
                mely_adatokkal_rendelkezunk,
                mely_adatok_hianyoznak,
                milyen_kerdeseket_kell_kerdezzunk,
                hogyan_jussunk_az_informaciohoz_amire_szuksegunk_van,
                fo_ok_a_hasznalatara: "objektivitás, fegyelem, pártatlanság, irányadás a témában"
                }
            },
            piros_kalap: {
                hasznalat: {
                specifikalt_erzes: "az a megérzésem/érzésem ezzel a témával kapcsolatban, hogy...",
                absztrakt_erzes: "az az érzésem ezzel a megbeszéléssel kapcsolatban, hogy...",
                intuicio: "minden racionális érv 'x' mellett szól, mégis azt érzem, hogy...",
                velemeny: "az eddigi tapasztalataim alapján az a véleményem, hogy...",
                fo_ok_a_hasznalatara: "érzések kifejezése egy adott időn belül a témával vagy a módszerrel kapcsolatban, magyarázat nélkül"
                }
            },
            fekete_kalap: {
                hasznalat:
                ovatossag,
                elovigyazatossag,
                veszely_elorejelzese,
                haszontalansag_elorejelzese,
                kritikus_gondolkodas,
                ellentmondasossag_eszlelese,
                kockazatok_figyelembevetele,
                akadalyok_figyelembevetele,
                bonyodalmak_elkerulese,
                gyengesegeken_valo_felulkerekedes,
                fo_ok_a_hasznalatara: "egyetlen buta mozdulat és összeomlik az elképzelés, akármilyen kreatívak is legyünk"
            },
            sarga_kalap: {
                hasznalat:
                dolgok_mukodesbe_hozasa,
                otletek_tovabbfejlesztese,
                megtudni_kinek_mi_az_ertek_milyen_korulmenyek_kozott,
                hogyan_vannak_kozvetitve_az_ertekek,
                milyen_egyeb_ertekek_vannak_meg,
                be_lehet_latni_ha_nem_talalok_semmit_aminek_gyakorlati_erteke_van,
                miert_valuszinu_hogy_valami_mukodni_fog,
                fo_ok_a_hasznalatara: "kifejleszteni, hogy logikai alapon vegyem észre a használható ötleteket"
            },
            zold_kalap: {
                hasznalat:
                ihlet_es_inspiracio_kibontakoztatasa,
                opciok_es_alternativak_felsorakoztatasa,
                lehetosegek_felmerese_es_ujak_hozzaadasa,
                ha_az_eddigi_modszerek_nem_valtak_be,
                ha_az_eddigi_dolgokat_bolcsebben_es_gyorsabban_meg_lehet_oldani,
                fo_ok_a_hasznalatara: "mindenki be van vonva kreatív ötletelésre egy adott időn belül, nincs kijelölt kizárólagos 'kreatív menedzser'"
            },
            kek_kalap: {
                hasznalat:
                mit_kell_tenni_es_milyen_idozitessel,
                szervezes_es_folyamatiranyitas,
                idointervallumok_felallitasa,
                pontos_instrukciok_es_tervezes,
                javaslat_mas_kalapok_hasznalatara,
                annak_osszegzese_hogy_mit_ertunk_el_eddig,
                objektiv_megjegyzesek_kozvetlen_hasznalata,
                ralatas_a_temara_magasabb_perspektivabol,
                fokusz_es_fegyelem,
                fo_ok_a_hasznalatara: "események megfigyelése, következtetések levonása és döntés meghozása"
            },
            modszer_hasznalata: {
                1: "célja, hogy egyszerre egy, és mindenki által tisztázott módban lássunk egy adott kérdéskörre ahelyett, hogy egyszerre akarnánk érzelmi, logikai, objektív, úttörő és kreatív oldalról megközelíteni azt",
                2: "az egész módszer alapvetően mesterkélt, de éppen ez teszi lehetővé, hogy kilépjünk egy nem-működő stratégiából",
                3: "mindig tisztázni kell mindenki számára, hogy éppen milyen kalapot veszünk fel",
                4: "figyelmeztetni lehet másokat arra, ha nem rendeltetésszerűen használják a kalapokat",
                5: "mind a kérdéses témára, mind a módszer használatára lehet megjegyzéseket tenni",
                6: "nem kötelező használni egy adott kalapot ha nincs mit mondanunk, elég ha csak megvan az erőbedobás a használatukra",
                7: "minden kalapra egy adott időkeret jut",
                8: "csak akkor működik, ha minden résztvevő partner a 'játékosságára', és együttműködő a kalapváltásokban"
            },
            eszrevetelek_a_modszerrel_kapcsolatban: {
                1: "tökéletes lenne eszmecserék kezelésére, mert egy 'kapcsolót' hoz létre gondolkodási formák között",
                2: "ugyanakkor fekete kalapban egyszerűen megfeledkezem arról, hogy abban vagyok",
                3: "sőt, magáról a módszerről is megfeledkezem",
                4: "addig, amíg külső hatás benyomására nem emlékeztetnek arra, hogy vannak más perspektívák is",
                5: "képes vagyok túlzásba vinni az elmélkedést és felnagyítani a hibáimat",
                6: "miközben az igazság hogy tudom, nem ez a megoldás, és ettől tudat alatt elégedetlen leszek",
                7: "így az ez által keltett elégedetlenség-érzetmet kivetítem másra",
                8: "végezetül mások hibáit nagyítom fel",
                9: "túl sokat vagyok magamtól 'zöld kalapban'"
            },
            kovetkeztetes: {
                1: "napi fél óra elmélkedés max!",
                2: "minden kérdést, amire nem jön azonnal válasz: elalvás előtt feltenni, és hagyni érni",
                3: "módszer használata közösen, egyszerre",
                4: "módszer használata minden 'kalap' egyenrangú figyelembevételével",
                5: "időkeretet adni a projekteknek"
            }
        },
    return console.log(list);
};