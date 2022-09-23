---
parent: Mechatronika
nav_order: 1
---
# Základy snímání
- Každá aplikace senzorů klade určité specifické požadavky
- Základní kritéria výběru snímače:
	- Cílové veličiny, které má senzor snímat
	- Předměty a pozadí, které senzor snímat nesmí
	- Nejlepší technologii snímání pro detekci pouze cílové veličiny
	- Dostupné místo a omezení montáže
	- Elektrické parametry
	* Požadavky na zapojení 
	* Požadavky na montáž
# Detektory přítomností objektů
- Materiál - kov, plast, dřevo, papir atd.
- Velikost / rozměry detekovaného předmětu či snímané plošky Tvar nebo barva předmětu
- Optické vlastnosti - průhlednost, polarizace světla, kontrast, luminiscence
- Skupenství pevné, kapalné, plynné
- Teploty
## Na co si dát pozor
- Velikost prostoru pro umístění snímače
- Max. možná vzdálenost detekovaného předmětu od snímače
- Vliv okoli:
	- Znečišťování detekčního prostoru
	-  Elmag. rušeni
	- Intenzita okolního světla
	- Okolní provozní teplota
	- Materiály a vzdálenost okolních objektů / předmětů 
- Rychlost pohybu předmětu v případě detekce za pohybu
- Životnost
## Typy běžně vyráběných senzorů
- Indukční
- Kapacitní
- Ultrazvukové
- Optické
- Difuzní
- Reflexní
- Optovláknové
- Kontrastní
- Luminiscenční
- Magnetické
- Teplotní

# Indukční senzory
- Indukční cívky -> magnetické pole je narušeno přítomností cílového objektu
- Indukční senzory detekují pouze vodivé objekty
- Snímání je konzistentní, opakovatelné a rušení od okolních zařízení je slabé
- Bezkontaktní senzory mají dosah snímání I až 120 mm
## Princip 
- Cívka senzoru vytváří proměnlivé magnetické pole
- Elektricky vodivý materiál (tlumící clonka) deformuje magnetického pole
- Důsledkem je změna impedance cívky (civka + rezsitor tvoří oscilátor)

1-mag pole, 2-clonka (el. vodivý materiál), 3- civka, 4-oscilátor, 5 - zesilovač).

## Využití
- Strojní průmysl - obráběcí stroje, řízení svářecích robotů, dopravníků, detekce posunu, dorazy, detekce tloušťky materiálu 
- Potravinářský průmysl - michací stroje, balící stroje, plnící stroje, posuvné dopravniky Dřevoobráběcí stroje, Montážní linky
- Automobilový průmysl - detekce pohybu kol automobilů (ABS, ESP). Bezdotykové koncové spínače na strojích. Měření a detekce přiblížení kovového předmětu, detekce vyoseni Detekce pohybu a posuvu - dopravníky, soustruhy

---
# Kapacitní Senzory
- Principem je rozpoznání dielektrika nebo husté látky ve snímané oblasti
- Vysoká citlivost
- Na funkci senzorů tohoto typu mají vliv okolní materiály
- Kapacitní senzor má obvykle dosah do 60 mm (na vzdálenost mají zásadní vliv dielektrické vlastnosti cílového objektu)
## Princip
- Kruhová elektroda uvnitř válcového pouzdra tvoří kondenzátor
- Základní kapacita se dále mění se změnou dielektrika - přiblížení objektu
- Kondenzátor spolu s rezistorem tvoří RC oscilátor Výstupní napěťový signál oscilátoru je usměrněn a filtrovánz
- Napěťový signál je poté porovnán s referenci
## Využití
- Typicky pro snímání polohy nekovových materiálů
- Strojní průmysl - dopravníky, detekce posunu, detekce tloušťky materiálu... 
- Potravinářský průmysl - michací stroje, balicí stroje, plnicí stroje, posuvné dopravníky Dřevoobráběcí stroje
- Montážní linky - nastavení pozice
- Textilní stroje
- Sledování a detekce úrovně hladiny materiálu (sypké, kapalné, pevné) napr. v zásobníku
- Detekce pohybu a posuvu, přesné nastavení pozice - dopravníky...
- Detekce malých kovových plošek (lepší citlivost než indukční senzory)
---
# Ultrazvukové senzory
- Detekce libovolného materiálu
- Detekce až na vzdálenost desítky metrů
- Možnost velmi přesného naladění, co se potlačení nežádoucího pozadí týče
- Nelze použít ve vakuu
## Využití
- Snímání a detekce polohy libovolných materiálů
- Detekce průhledných předmětů Nasazení v prašném nebo vlhkém prostředí
- Strojní průmysl - dopravníky, detekce posunu
- Dřevoobráběcí stroje
- Montážní linky - nastavení pozice
- Textilní stroje
- Sledování a detekce úrovně hladiny materiálu (sypké, kapalné, pevné) např. v zásobníku
- Detekce pohybu a posuvu, přesné nastavení pozice - dopravníky
---
# Optické senzory
- Senzor vyzařuje a přijímá světlo na určité vlnové délce
- Infračervené, viditelné (červené) nebo laserové záření
- Nejcitlivější na prach a nečistoty (mohou způsobit falešnou aktivaci)
- Největší rozsah snímání:
	- senzory s laserovým paprskem dokážou detektovat objekty o rozměrech několika mikronů
	- detekce na vzdálenosti až desítek metrů
## Princip
- Pracuje na principu detekce existence nebo měření intenzity paprsku světla dopadajícího na přijímací část senzoru
- Obecně může být zdroj paprsku oddělen od přijímače
- Reflexní senzory, tzn. zdroj paprsku světla i detektor jsou umístěny v jednom
- Konkrétně se měří úroveň amplitudy nebo světelný výkon a porovnává se s referencí 
- Umožňují nejen měřit vzdálenost, ale zpracovat jiné optické parametry jakou jsou kontrast a barva
## Využití
- Detekce obrovských i malých objektů
- Snímání pohybujících se předmětů i různých teplot Strojní průmysl - dopravníky, detekce posunu, kontrola kvality
- Montážní linky - nastavení pozice, počítání dílů • Textilní stroje - zjišťování množství materiálu na odvíjené roliSledování a detekce otvorů ve výrobcích
- Kontrola velikosti předmětů
- Kontrola naplnění různých zásobníků
- Zjišťování chybných etiket



