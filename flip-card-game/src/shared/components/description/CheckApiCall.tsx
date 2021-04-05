import { useCallback, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { useLocation } from 'react-router-dom';
import {
  fetchGetApiCallExample,
} from "src/store/actions/exampleAction";
import ImageArea from "src/shared/components/description/ImageArea";
import { GetFakeDataList} from "src/store/models/actionModel";
import React from "react";
import Randomizer from "../Randomizer";
const MainArea = ({hint= null, question = null}:any) => {
  return (
    <div className="main-area">
      <div className="blog-post">
        <p className={"read-more" + (question ? " question" : "")}>{hint}</p>
      </div>
    </div>
  )
};
const Front= ({images=null,hint=null, question= null}: any) => {  
    return (
      <div className="front">
        {images && <ImageArea url={images}/>
        }
        <MainArea hint={question ? question : hint} question= {question}/>
      </div>
    )
  
}

const Back = ({place}:any) => {
  return(
    <div className="back">
        <p>{place}</p>
      </div>
  )
}
const BlogCard = (destination: GetFakeDataList) => { 
   
  const [flipped,setFlipped] = useState(false);
  const flip = useCallback(() => setFlipped(!flipped),[flipped] ) ;
  
    return (

      <div onClick={flip} className={"card-container" + (flipped ? " flipped" : "")}>

        <Front images={destination.url} hint = {destination.hint}/>
        <Back place= {destination.place}/>
      </div>

    )
  
}

const PeopleRevealer = (peopleData: any) => {
  // Ideal candidate for a custom saga
  const [flipped,setFlipped] = useState(false);
  const flip = useCallback(() => setFlipped(!flipped),[flipped] ) ;
  
    return (

      <div onClick={flip} className={"card-container" + (flipped ? " flipped" : "")}>

        <Front question={peopleData.question} />
        <Back place= {peopleData.answer}/>
      </div>

    )
}
const CheckApiCall = ({valueSelected}: any) => {
  
  const dispatch = useDispatch();
  const store = useSelector((state) => state);
  console.log("store", store);
  const [isSuccess, setIsSuccess] = useState(false);
  const [randomValue,setNewRandomValue] = useState(0);
  const ref = React.useRef<HTMLButtonElement>(null);
  const getSagaAPICall = () => {
    setIsSuccess(false);
    dispatch(fetchGetApiCallExample());
    
  };
  const handleButtonClick = React.useCallback(() => {
    setNewRandomValue(Math.floor(Math.random() * 16));
},[]); 
  let location = useLocation(); 
  // <p>{location.pathname}</p> 
  const famousPlacesImages = [
    {url:"https://64.media.tumblr.com/46f29f14c1a3f1aca154496d97ab46a1/8196a9e6aff44afd-e9/s1280x1920/b0eeedf2e8de0e3a55e2c8a8de3beb03f506c4f2.jpg", place:"Virupaksha Temple, Hampi", hint:"It is part of the Group of Monuments at Hampi designated a #UNESCO #WorldHeritageSite. The temple is dedicated to #Virupaksha a form of Shiva"},
    {url:"https://64.media.tumblr.com/53778665e98fe2439e6895ac97ae9038/0deda26c38de9b5e-21/s540x810/24e5e571c56f91baa9f427649b9ce9697bda1b39.jpg", place:"Khecheopalri Lake, 147kms from Gangtok", hint:"The lake is sacred for both #Buddhists and #Hindus, and is believed to be a wish fulfilling lake"},
    {url:"https://64.media.tumblr.com/5637d1f0a233afff01068593a87d2454/d50a29b8dc1e4157-87/s1280x1920/ab8f1eecd79816be7b6da1a083400cba867f1eb9.jpg", place:"Qutub Minar"},
    {url:"https://64.media.tumblr.com/f8060e0b4ff418bcba37979f44684aa6/9b313d681cf842f3-7d/s540x810/91110d488692c3b76d449fd609730818253857ca.jpg", place:"UpperSiang, Arunachal Pradesh",hint:"Seven Sisters"},
    {url:"https://64.media.tumblr.com/61d74e97443180e9444ca1c4ba9d2350/9d0ff1add849263a-2a/s540x810/31243f06a1e3f9fa1ecb4847f8caf70763bcffc6.jpg", place:"Pattadakal, karnataka", hint:"#UNESCO #WorldHeritageSite "},
    {url:"https://64.media.tumblr.com/4e9be018fe7f926572f77ddaf9e7c827/d06d100e16549579-cb/s540x810/7edeec71f0475937a6fb496c1197ae1bc8749003.jpg", place:"Kerala in the cliff of #Azhimala #beach "},
    {url:"https://64.media.tumblr.com/21cc515cf188cc6e568644f84957829c/47c4be62c7ec0ccd-69/s540x810/4b91f25c91294aa6bc13a88066d4c85e0d8f2bbe.jpg", place:"DevPrayag - The Confluence of the Gods"},
    {url:"https://64.media.tumblr.com/6224df90c1e1e821ae7be38363b637da/tumblr_p05ly1haAN1w98je0o1_1280.jpg", place:"Humayun’s tomb (Maqbara e Humayun) is the tomb of the Mughal Emperor Humayun in Delhi,"},
    {url:"https://64.media.tumblr.com/289f0702e8ec2be403c593e4c224b3da/fc3e9855809f2312-53/s540x810/9ccf720b23d8663fd013f7ecdf88553133ddfb99.jpg", place:"MurdeshwarTemple, #Karnataka"},
    {url:"https://64.media.tumblr.com/367d77f819e9c02cd1a708e502bb84eb/dd46a4955b6874e6-bf/s540x810/dafb71c6da6c362c6a7feef7d91c2f86c9b29e8a.jpg", place:"#AgrasenKiBaoli #NewDelhi"},
    {url:"https://64.media.tumblr.com/f3b9e0bc2e600373f2d20d1a4a512451/a4042d7a453cc42d-53/s540x810/a4f7531086282adcacb7567c709e9729df9963e0.jpg", place:"BuddhaPark of #Ravangla, also known as #TathagataTsal, is situated near Ravangla in #SouthSikkim "},
    {url:"https://64.media.tumblr.com/8e7ba68f7ff55a98548e6637d0ac5f71/a625954a353e0863-55/s540x810/127283f52d9182692f69e39f8549f85bbbc3a5b7.jpg", place:"KalkaShimlaToyTrain"},
    {url:"https://64.media.tumblr.com/61735bfd394e69fa29824140f4495981/b6b0c77a3529822e-af/s1280x1920/1dbe6afde6bbcbac2db0f9ee37370183dbb7d174.jpg", place:"#RashtrapatiBhawan, #Delhi"},
    {url:"https://64.media.tumblr.com/aad40df08ac0542276493dc2030fe21f/tumblr_ptdprsJUOB1w98je0o1_1280.jpg", place:"Taj Mahal, Agra"},
    {url:"https://64.media.tumblr.com/54eb4de0c46c021aa580a624af6c39d2/83393e5f505ed4f9-e8/s540x810/b651be4838d8f91eca8d8a4e7529402609a1b1c2.jpg",place:"The highest suspension bridge in World,Himachal Pradesh"},
    {url:"https://64.media.tumblr.com/97eca1c08bfa800f248ebdedff15e367/dc392aee0ff06438-ba/s540x810/ce0cadffaf96952ae2a729c3ddfdc124e15a6330.jpg",place:"Kotilingeshwar, around Bangalore"},
    {url:"https://64.media.tumblr.com/55a49a4169ff7f31276b64ea62c2372a/5d62804b17fc5925-07/s1280x1920/e4f8037e9713794d40423d92a7dd24006550c665.jpg", place:" Chhatarpur city of #MadhyaPradesh, there lies a cluster of temples, famously called the #KhajurahoTemples"},
    {url:"https://64.media.tumblr.com/e2001290e7c4854ffb823c562dee6b82/97356844ff05d4cf-ea/s1280x1920/eff44a0db2c85440c3fc00f28007f5beb6497757.jpg", place:"Krishna’s Butterball (also known as Vaan Irai Kal and Krishna’s Gigantic Butterball) is a gigantic granite boulder resting on a short incline in the historical coastal resort town of #Mamallapuram in #TamilNadu state of India."},
    {url:"https://64.media.tumblr.com/56d40e589db59bf5cdbe70c39491ee42/3650b85fdea173ab-77/s1280x1920/5616dc3534ba7511fc645e1069e143f09b5ed4a9.jpg",place:"Ellora Caves: Kailasa Temple, #Aurangabad, #Maharashtra"},
    {url:"https://64.media.tumblr.com/3cfe74fa6dd7f3afcdee95ab0509001d/7805ca1a5a64c2de-e9/s1280x1920/6647808a104459ed3aee0339b3216639cffd3094.jpg", place:"The Gold Fish and The Golden Temple.  #Amritsar #Punjab "},
    {url:"https://64.media.tumblr.com/ef51165bfc83e138a5c6dddf74645c1e/b235471b660773ee-73/s1280x1920/7cc048cc2b8b088e1f571a878f4bf093b0e101c5.jpg", place:" #AdiyogiShivaStatue, standing in the heart of #TamilNadu with a statue of 147ft height! "},
    {url:"https://64.media.tumblr.com/b13d63d13ac7b81ae41e858411577bd0/9ce3c0906f6006ad-82/s1280x1920/7d0e3bfad01841068b37527a6e401dd84623390a.jpg", place:"#BandraWorliSeaLink (officially known as #RajivGandhiSeaLink) is a bridge that links #Bandra in the Western Suburbs of #Mumbai with #Worli in #SouthMumbai. It is a cable-stayed bridge with pre-stressed concrete-steel viaducts on either side"},
  {url:"https://64.media.tumblr.com/c995d47d334d1c13b3936a34cfbc239e/2134d4eb39e10598-d7/s1280x1920/1ca89f4c31775ac742305ed7f7e71b8970b29e46.jpg",place:"#PambanBridge is a railway bridge which connects the town of Mandapam in mainland India with #PambanIsland, and #Rameswaram. Opened on 24 February 1914, it was India’s first sea bridge, and was the longest sea bridge in India until the opening of the Bandra-Worli Sea Link in 2010."},
  {url:"https://64.media.tumblr.com/869ce5fdc7a2d0030b99b507686b1105/tumblr_pr22atjK7t1w98je0o1_1280.jpg", place:"The Basilica of Bom Jesus or Borea Jezuchi Bajilika is located in Goa, India, and is a UNESCO World Heritage Site.", hint:" The basilica holds the mortal remains of St. Francis Xavier."},
  {url:"https://64.media.tumblr.com/b2b5cf1444beba14a81474fac3150b1a/eaa9df04a110bbea-8d/s1280x1920/e5d85b8b3d2fef5933c78986c70b9695690ce4da.jpg", place:"#SwaminarayanAkshardham is a #HinduTemple, and a spiritual-cultural campus in #NewDelhi, India."},
  {url:"https://64.media.tumblr.com/701190b454a9a7225045fb26394abcd2/a809ef77df002284-1c/s540x810/049fc7643ef6256df7aaee88c1c0f9ad37ab43e0.jpg", place:"The #Charminar, constructed in 1591’s CE, is a monument and mosque located in #Hyderabad, #Telangana, India. "},
  {url:"https://64.media.tumblr.com/18a0985683e6c8cebcb88e650069ddce/6ce06a7af678aa67-bf/s1280x1920/b0be6802e429eb0543e08560e2608f7f373f13f0.jpg", place:"The massive edifice of #HawaMahal stands at the intersection of the main road in #Jaipur, Badi Chaupad and was built by Maharaja Sawai Pratap Singh in the year 1799."},
  {url:"https://64.media.tumblr.com/4e422059795c6cdf6907b29f90896e0f/38671b1a8fc754de-10/s1280x1920/25cc07f16a9cc1d0756108cba85a1f5f001e5cce.jpg", place:"#VrindavanChandrodayaMandir is an under construction temple at #Vrindavan, #Mathura, India. As planned, it will be the tallest religious monument in the world. At its potential cost of ₹300 crore (US$42 million) it is likely to be one of the most expensive temples in world. The temple has been planned by ISKCON Bangalore. The planned effort includes the temple rising to a height of about 700 feet (213 meters or 70 floors) and a built-up area of 540,000 sq. ft. The project is set in 62 acres of land and includes 12 acres for parking and a helipad."},
  {url:"https://64.media.tumblr.com/0e048084f9267af2ce5599f94f2dfb1a/da14027be5ce6262-6a/s1280x1920/d85cedd997813193669f6ebbac591bf319b3a0cb.jpg", place:"This is the chariot wheel of the sun temple in Konark, Orissa. This is a unesco world heritage sight."},
  {url:"https://64.media.tumblr.com/8cc93f048cca265845f57c9400416369/36c661e64ab7c474-2a/s1280x1920/20ed6d68e24ccc982e82ba8e4a9c82524dcb3696.jpg", place:"#ManikarnikaGhat is one of the holiest cremation grounds among the sacred riverfronts (ghats), alongside the river #Ganga, in the city of #Varanasi in the Indian state of #UttarPradesh"},
  {url:"https://64.media.tumblr.com/d19a66a7a849a46dd8a38ca03be0306c/3c7f279b4afbc6ab-8b/s1280x1920/27aaa050a8b816fccad2f9928cb7abd97dbed5cf.jpg", place:"#AmbedkarMemorialPark, formally known as Dr. Bhimrao Ambedkar Samajik Parivartan Prateek Sthal, is a public park and memorial in Gomti Nagar, #Lucknow, #UttarPradesh, India."}
  ]
  
const folksQuestionnaire = [
  {question:"_________ Has no bad habbits", answer:"That's me Yes... Prashant"},
  {question:"_________ tells it on the face", answer:"That's.... Pratibha"},
  {question:"_________ falls in line even if suggestions are not right", answer:"That's ... Pompita"},
  {question:"_________ always bolster what is right", answer:"That's me Yes... Prashant"},
  {question:"_________ says if it is a rule I would abide by it", answer:"That's ... Sanket"},
  {question:"_________ could be confused over ANT vs ELEPHANT jokes", answer:"That's... Deepika"},
  {question:"_________ Ask this person what NOT to do", answer:"That's... Neha with a Ji"},
  {question:"_________ if 2+2 =4 , then is it possible 3+3 =6 or is it 4? I am concerned", answer:"That's ... Mahesh"},
  {question:"_________ not sure at this point of time :O :O ", answer:"That's ... Pinky"},
  {question:"_________ so this person agress to wake up at 5 for exercise,then at 05:05 he has 50 missed calls", answer:"That's ... Sanket"},
  {question:"_________ he has to log in at 9, if he logs in at 9:00:01, he would work till 06:05, as punishment", answer:"That's ... Sanket"},
  {question:"_________ loves to bite nails when he is hungry", answer:"That's... Rahul"},
  {question:"_________ conscious of what to eat", answer:"That's ... Pratibha.... or maybe Pinky"},
  {question:"_________ a conversationalist, a good listener", answer:"That's... Pompita :)"},
  {question:"_________ for this person somebody can say he is dsciplined.. God Forbid but okay", answer:"That's... Mahesh"},
  {question:"_________ can entertain you or bore you with lots and lots of talking", answer:"That's... Deepika"},
  {question:"_________ after buddha attains entitlement under the tree, this person is following the same and can sit for whole day , yes at same place", answer:"That's... Sanket"},
 
]
console.log("Ref value recieved??", randomValue);

  return (
    <>
    {isSuccess && <p>Normal API call success. go to Network</p>}
    <div className="api-box">
        <button onClick={getSagaAPICall} style={{ marginRight: 10 }}>
          GET SAGA API CALL
        </button>       
      </div>
      
<Randomizer ref={ref} clickHandler= {handleButtonClick}>Generate Random number</Randomizer>  

<p >Random pick is: {randomValue}</p>
      <div className="page-container">
{/* {location.pathname === "/place" && famousPlacesImages.map((place) => BlogCard (place))}
{location.pathname === "/people" && folksQuestionnaire.map((peeps) => PeopleRevealer (peeps))} */}
{location.pathname === "/place" && BlogCard (famousPlacesImages[randomValue])}
{location.pathname === "/people" && PeopleRevealer (folksQuestionnaire[randomValue])}
        
        <footer>
          Image credit: <a href="https://78.media.tumblr.com/d98fb931adb117c70f0dbced9e947520/tumblr_pe582mbWip1tlgv32o1_1280.png">8pxl on Tumblr</a>
        </footer>
      </div>
      
      </>
  )
};

export default CheckApiCall;
