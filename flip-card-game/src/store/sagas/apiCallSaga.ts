import { takeLatest, put } from "redux-saga/effects";
import {
  GET_JSON_PLACEHOLDER_URL,
  POST_JSON_PLACEHOLDER_URL,
} from "src/shared/constants/urls";
import {
  fetchGetApiDataExample,
  fetchPostApiDataExample,
} from "../actions/exampleAction";
import FetchSendRequest from "src/shared/services/fetchSendRequestService";
import actionTypes from "../types/exampleTypes";

const sendRequest = FetchSendRequest.instance;

function* getAPICallSagaExample(): any {
  const response: any = yield sendRequest.MakeAPICall({
    url: GET_JSON_PLACEHOLDER_URL,
  });
  if (response) {

    const famousPlacesImages = [
      {url:"https://64.media.tumblr.com/46f29f14c1a3f1aca154496d97ab46a1/8196a9e6aff44afd-e9/s1280x1920/b0eeedf2e8de0e3a55e2c8a8de3beb03f506c4f2.jpg", place:"Virupaksha Temple, Hampi", hint:"It is part of the Group of Monuments at Hampi designated a #UNESCO #WorldHeritageSite. The temple is dedicated to #Virupaksha a form of Shiva"},
      {url:"https://64.media.tumblr.com/53778665e98fe2439e6895ac97ae9038/0deda26c38de9b5e-21/s540x810/24e5e571c56f91baa9f427649b9ce9697bda1b39.jpg", place:"Khecheopalri Lake, 147kms from Gangtok", hint:"The lake is sacred for both #Buddhists and #Hindus, and is believed to be a wish fulfilling lake"},
      {url:"https://64.media.tumblr.com/f8060e0b4ff418bcba37979f44684aa6/9b313d681cf842f3-7d/s540x810/91110d488692c3b76d449fd609730818253857ca.jpg", place:"UpperSiang, Arunachal Pradesh",hint:"Seven Sisters"},
      {url:"https://64.media.tumblr.com/61d74e97443180e9444ca1c4ba9d2350/9d0ff1add849263a-2a/s540x810/31243f06a1e3f9fa1ecb4847f8caf70763bcffc6.jpg", place:"Pattadakal, karnataka", hint:"#UNESCO #WorldHeritageSite "},
      {url:"https://64.media.tumblr.com/4e9be018fe7f926572f77ddaf9e7c827/d06d100e16549579-cb/s540x810/7edeec71f0475937a6fb496c1197ae1bc8749003.jpg", place:"Kerala in the cliff of #Azhimala #beach "},
      {url:"https://64.media.tumblr.com/21cc515cf188cc6e568644f84957829c/47c4be62c7ec0ccd-69/s540x810/4b91f25c91294aa6bc13a88066d4c85e0d8f2bbe.jpg", place:"DevPrayag - The Confluence of the Gods"},
      {url:"https://64.media.tumblr.com/289f0702e8ec2be403c593e4c224b3da/fc3e9855809f2312-53/s540x810/9ccf720b23d8663fd013f7ecdf88553133ddfb99.jpg", place:"MurdeshwarTemple, #Karnataka"},
      {url:"https://64.media.tumblr.com/367d77f819e9c02cd1a708e502bb84eb/dd46a4955b6874e6-bf/s540x810/dafb71c6da6c362c6a7feef7d91c2f86c9b29e8a.jpg", place:"#AgrasenKiBaoli #NewDelhi"},
      {url:"https://64.media.tumblr.com/f3b9e0bc2e600373f2d20d1a4a512451/a4042d7a453cc42d-53/s540x810/a4f7531086282adcacb7567c709e9729df9963e0.jpg", place:"BuddhaPark of #Ravangla, also known as #TathagataTsal, is situated near Ravangla in #SouthSikkim "},
      {url:"https://64.media.tumblr.com/8e7ba68f7ff55a98548e6637d0ac5f71/a625954a353e0863-55/s540x810/127283f52d9182692f69e39f8549f85bbbc3a5b7.jpg", place:"KalkaShimlaToyTrain"},
      {url:"https://64.media.tumblr.com/54eb4de0c46c021aa580a624af6c39d2/83393e5f505ed4f9-e8/s540x810/b651be4838d8f91eca8d8a4e7529402609a1b1c2.jpg",place:"The highest suspension bridge in World,Himachal Pradesh"},
      {url:"https://64.media.tumblr.com/97eca1c08bfa800f248ebdedff15e367/dc392aee0ff06438-ba/s540x810/ce0cadffaf96952ae2a729c3ddfdc124e15a6330.jpg",place:"Kotilingeshwar, around Bangalore"}
    ]
    yield put(fetchGetApiDataExample(famousPlacesImages as any));
  }
}

function* postAPICallSagaExample({ payload }: any): Generator {
  try {
    const response: any = yield sendRequest.MakeAPICall({
      url: POST_JSON_PLACEHOLDER_URL,
      body: payload,
    });
    if (response) {
      yield put(fetchPostApiDataExample(response));
    }
  } catch (e) {
    console.error(e);
  }
}

export function* watchApiCallSagaExample(): any {
  yield takeLatest(actionTypes.GET_API_CALL, getAPICallSagaExample);
  yield takeLatest(actionTypes.POST_API_CALL, postAPICallSagaExample);
}

export default watchApiCallSagaExample;
