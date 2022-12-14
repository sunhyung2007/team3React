function ZZZ() {
    return (
        <div>
            <div className="wrap">
                <div className="right_area page_order_form">
                    <div className="right_contents">
                        <h2 className="title-page">Order / Payment</h2>
                    </div>

                    <div className="right_contents section_address section_address--line">
                        <div className="cell_order_form article_tit">
                            <div className="cell_order_form1">
                                <h3 className="title-box font-mss">Recipient Info <span className="korSub">수령자 정보</span></h3>
                            </div>
                        </div>

                        <div className="cell_order_form box_address_cell">
                            <div className="clear cell_order_form1 border_add_order">
                                <ul className="box_receiver_info">
                                    <li className="cell_discount_tit">
                                        배송지 선택
                                    </li>
                                    <li className="cell_discount_detail">
                                        <div className="receiver-radio-block" id="quickDeliveryList">
                                            <label className="box_choice">
                                                <input type="radio" name="delivery_choice" /> 김동신님 배송지
                                            </label>
                                        </div>
                                    </li>
                                </ul>
                                <ul className="box_receiver_info" >
                                    <li className="cell_discount_tit">수령인</li>
                                    <li className="cell_discount_detail2 order_address_form box_receiver">
                                        <div>
                                            <span id="delivery-name">김동신</span>
                                        </div>
                                    </li>
                                </ul>
                                <ul className="box_receiver_info" >
                                    <li className="cell_discount_tit">휴대전화</li>
                                    <li className="cell_discount_detail order_address_form box_phone">
                                        <div>
                                            <span id="delivery-mobile">010-9150-3918</span>
                                        </div>
                                    </li>
                                </ul>
                                <ul className="box_receiver_info" >
                                    <li className="cell_discount_tit">전화번호</li>
                                    <li className="cell_discount_detail order_address_form box_tel">
                                        <div>
                                            <span id="delivery-phone">033-262-7918</span>
                                        </div>
                                    </li>
                                </ul>
                                <ul className="box_receiver_info" >
                                    <li className="cell_discount_tit">
                                        배송지 주소
                                    </li>
                                    <li className="cell_discount_detail2 order_address_form box_address">
                                        <div>
                                            <span id="delivery-addr">강원도 춘천시 중앙로3가 방송길7번길 6 402호</span>
                                        </div>
                                    </li>
                                </ul>
                                <ul className="box_receiver_info" >
                                    <li className="cell_discount_tit">배송 메모<br />
                                    </li>
                                    <li className="cell_discount_detail box_memo">
                                        <select name="dlv_selectbox" id="dlv_selectbox" onchange="showEtc(this.value);">
                                            <option value="" selected="selected">배송 시 요청사항을 선택해주세요</option>
                                            <option value="부재 시 경비실에 맡겨주세요" >부재 시 경비실에 맡겨주세요</option>
                                            <option value="부재 시 택배함에 넣어주세요" >부재 시 택배함에 넣어주세요</option>
                                            <option value="부재 시 집 앞에 놔주세요" >부재 시 집 앞에 놔주세요</option>
                                            <option value="배송 전 연락 바랍니다" >배송 전 연락 바랍니다</option>
                                            <option value="파손의 위험이 있는 상품입니다. 배송 시 주의해 주세요." >파손의 위험이 있는 상품입니다. 배송 시 주의해 주세요.</option>
                                        </select>
                                    </li>
                                </ul>
                            </div>
                        </div>
                    </div>
                </div>
            </div>

            <div className="right_contents section_payment">
                <h3 className="title-box font-mss">Payment info / Agreement <span className="korSub">결제 정보 / 주문자 동의</span></h3>
                <div>
                    <div className="cell_order_form">
                        <div className="clear cell_order_form1 border_add_order" id="payment_info_area">
                            <div className="__payment-view __payment-pg-view" >
                                <ul className="list_payment_order">
                                    <li className="cell_discount_tit new-payment-area">결제 안내</li>
                                    <li className="cell_discount_detail payment-area">
                                        <div className="payment-area-wrap">
                                            {/* <input type="radio" id="paym_01" name="kyejae" value="card" onclick="selectPayKind('card');">
                                                <label for="paym_01" className="box_choice">카드</label></input>

                                            <input type="radio" id="paym_09" name="kyejae" value="kkopay" onclick="selectPayKind('kkopay');">
                                                <label for="paym_09" className="box_choice">카카오페이</label></input> */}

                                        </div>

                                        <div id="pay_info2" >
                                            <div id="div_card" className="box-payment-method" >
                                                <div className="box-select">
                                                    <select name="card_code" id="card_code">
                                                        <option value="">카드 선택</option>
                                                        <option value="CCHN" selected="selected">하나카드</option>
                                                        <option value="CCBC" selected="selected">BC카드</option>
                                                        <option value="CCCJ" selected="selected">제주은행</option>
                                                        <option value="CCCT" selected="selected">씨티카드</option>
                                                        <option value="CC48" selected="selected">신협은행</option>
                                                        <option value="CCDI" selected="selected">현대카드</option>
                                                        <option value="CC401" selected="selected">KB증권</option>
                                                        <option value="CCJB" selected="selected">전북은행</option>
                                                        <option value="CC92" selected="selected">카카오뱅크</option>
                                                        <option value="CC215" selected="selected">산업은행</option>
                                                        <option value="CCKJ" selected="selected">광주은행</option>
                                                        <option value="CC302" selected="selected">케이뱅크</option>
                                                        <option value="CCKM" selected="selected">국민카드</option>
                                                        <option value="CCLG" selected="selected">신한카드</option>
                                                        <option value="CCLO" selected="selected">롯데카드</option>
                                                        <option value="CC403" selected="selected">NH투자증권</option>
                                                        <option value="CC207" selected="selected">우체국</option>
                                                        <option value="CC33" selected="selected">우리카드</option>
                                                        <option value="CC216" selected="selected">저축은행</option>
                                                        <option value="CC204" selected="selected">새마을금고</option>
                                                        <option value="CCSS" selected="selected">삼성카드</option>
                                                        <option value="CCSU" selected="selected">수협은행</option>
                                                        <option value="CCNH" selected="selected">농협카드</option>
                                                    </select>

                                                    <select id="card_quota" name="card_quota">
                                                        <option value="1">일시불</option>
                                                        <option value="2">2개월</option>
                                                        <option value="3">3개월</option>
                                                        <option value="4">4개월</option>
                                                        <option value="5">5개월</option>
                                                        <option value="6">6개월</option>
                                                        <option value="7">7개월</option>
                                                        <option value="8">8개월</option>
                                                        <option value="9">9개월</option>
                                                        <option value="10">10개월</option>
                                                        <option value="11">11개월</option>
                                                        <option value="12">12개월</option>
                                                    </select>
                                                </div>

                                                <div id="div_kkopay" >
                                                    <ul className="order-notice__bullet">
                                                        <li className="order-notice__bullet-item">
                                                            카카오페이는 카카오톡에서 카드를 등록, 간단하게 비밀번호만으로 결제할 수 있는 빠르고 편리한 모바일 결제 서비스입니다.
                                                        </li>
                                                        <li className="order-notice__bullet-item">
                                                            지원 카드 : 모든 카드 등록/결제 가능
                                                        </li>
                                                    </ul>
                                                </div>
                                            </div>
                                        </div>
                                    </li>
                                </ul>
                            </div>
                        </div>
                    </div>


                    <div className="btn_wrap order_form__payment-button-wrap">
                        <a id="btn_pay" onclick="Order.payment();" className="order_form__payment-button">
                            <span id="btn-pay_amt">0</span>원 결제하기&nbsp;
                        </a>
                    </div>
                </div>
            </div>



        </div>

    );
}

export default ZZZ;