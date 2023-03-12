import React, { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";
import { useNavigate } from "react-router-dom";
import {  ModalInformation } from "../components";
import { ButtonReturn } from "../../components";
import {
  getEmployeePayrollByIdThunk,
  updateEmployeePayrollByIdThunk,
} from "../../app/slicesTalentManagement/employeePayroll.slice";
import { useCoinFormatter } from "../../hooks";
import "../assets/styles/AddNewsPayroll.css";

export const TableMonthly = () => {
  const dispatch = useDispatch();
  const navigate = useNavigate();
  const { id } = useParams();
  const [information, setInformation] = useState("");
  const employeePayroll = useSelector((state) => state.employeePayroll);
  const valueTimeBasicDiurnal = Math.floor(employeePayroll.salary / 240);
  const valueTimeNocturnalBasic = valueTimeBasicDiurnal * 1.35;
  const valueTimeDiurnalExtra = valueTimeBasicDiurnal * 1.25;
  const valueTimeNocturnalExtra = valueTimeBasicDiurnal * 1.75;
  const valueTimeFestiveDiurnalBasic = valueTimeBasicDiurnal * 1.75;
  const valueTimeFestiveNocturnalBasic =
    valueTimeBasicDiurnal * 1.1 + valueTimeBasicDiurnal;
  const valueTimeFestiveDiurnalExtra = valueTimeBasicDiurnal * 2;
  const valueTimeFestiveNocturnalExtra =
    valueTimeBasicDiurnal * 1.5 + valueTimeBasicDiurnal;
  const valueTimeCompensatory =
    valueTimeFestiveDiurnalBasic - valueTimeBasicDiurnal;

  const [otherDeductions, setOtherDeductions] = useState(0);

  const [a1, setA1] = useState(0);
  const [a2, setA2] = useState(0);
  const [a3, setA3] = useState(0);
  const [a4, setA4] = useState(0);
  const [a5, setA5] = useState(0);
  const [a6, setA6] = useState(0);
  const [a7, setA7] = useState(0);
  const [a8, setA8] = useState(0);
  const [a9, setA9] = useState(0);
  const [a10, setA10] = useState(0);
  const [a11, setA11] = useState(0);
  const [a12, setA12] = useState(0);
  const [a13, setA13] = useState(0);
  const [a14, setA14] = useState(0);
  const [a15, setA15] = useState(0);
  const [a16, setA16] = useState(0);
  const [a17, setA17] = useState(0);
  const [a18, setA18] = useState(0);
  const [a19, setA19] = useState(0);
  const [a20, setA20] = useState(0);
  const [a21, setA21] = useState(0);
  const [a22, setA22] = useState(0);
  const [a23, setA23] = useState(0);
  const [a24, setA24] = useState(0);
  const [a25, setA25] = useState(0);
  const [a26, setA26] = useState(0);
  const [a27, setA27] = useState(0);
  const [a28, setA28] = useState(0);
  const [a29, setA29] = useState(0);
  const [a30, setA30] = useState(0);

  const [b1, setB1] = useState(0);
  const [b2, setB2] = useState(0);
  const [b3, setB3] = useState(0);
  const [b4, setB4] = useState(0);
  const [b5, setB5] = useState(0);
  const [b6, setB6] = useState(0);
  const [b7, setB7] = useState(0);
  const [b8, setB8] = useState(0);
  const [b9, setB9] = useState(0);
  const [b10, setB10] = useState(0);
  const [b11, setB11] = useState(0);
  const [b12, setB12] = useState(0);
  const [b13, setB13] = useState(0);
  const [b14, setB14] = useState(0);
  const [b15, setB15] = useState(0);
  const [b16, setB16] = useState(0);
  const [b17, setB17] = useState(0);
  const [b18, setB18] = useState(0);
  const [b19, setB19] = useState(0);
  const [b20, setB20] = useState(0);
  const [b21, setB21] = useState(0);
  const [b22, setB22] = useState(0);
  const [b23, setB23] = useState(0);
  const [b24, setB24] = useState(0);
  const [b25, setB25] = useState(0);
  const [b26, setB26] = useState(0);
  const [b27, setB27] = useState(0);
  const [b28, setB28] = useState(0);
  const [b29, setB29] = useState(0);
  const [b30, setB30] = useState(0);

  const [c1, setC1] = useState(0);
  const [c2, setC2] = useState(0);
  const [c3, setC3] = useState(0);
  const [c4, setC4] = useState(0);
  const [c5, setC5] = useState(0);
  const [c6, setC6] = useState(0);
  const [c7, setC7] = useState(0);
  const [c8, setC8] = useState(0);
  const [c9, setC9] = useState(0);
  const [c10, setC10] = useState(0);
  const [c11, setC11] = useState(0);
  const [c12, setC12] = useState(0);
  const [c13, setC13] = useState(0);
  const [c14, setC14] = useState(0);
  const [c15, setC15] = useState(0);
  const [c16, setC16] = useState(0);
  const [c17, setC17] = useState(0);
  const [c18, setC18] = useState(0);
  const [c19, setC19] = useState(0);
  const [c20, setC20] = useState(0);
  const [c21, setC21] = useState(0);
  const [c22, setC22] = useState(0);
  const [c23, setC23] = useState(0);
  const [c24, setC24] = useState(0);
  const [c25, setC25] = useState(0);
  const [c26, setC26] = useState(0);
  const [c27, setC27] = useState(0);
  const [c28, setC28] = useState(0);
  const [c29, setC29] = useState(0);
  const [c30, setC30] = useState(0);

  const [d1, setD1] = useState(0);
  const [d2, setD2] = useState(0);
  const [d3, setD3] = useState(0);
  const [d4, setD4] = useState(0);
  const [d5, setD5] = useState(0);
  const [d6, setD6] = useState(0);
  const [d7, setD7] = useState(0);
  const [d8, setD8] = useState(0);
  const [d9, setD9] = useState(0);
  const [d10, setD10] = useState(0);
  const [d11, setD11] = useState(0);
  const [d12, setD12] = useState(0);
  const [d13, setD13] = useState(0);
  const [d14, setD14] = useState(0);
  const [d15, setD15] = useState(0);
  const [d16, setD16] = useState(0);
  const [d17, setD17] = useState(0);
  const [d18, setD18] = useState(0);
  const [d19, setD19] = useState(0);
  const [d20, setD20] = useState(0);
  const [d21, setD21] = useState(0);
  const [d22, setD22] = useState(0);
  const [d23, setD23] = useState(0);
  const [d24, setD24] = useState(0);
  const [d25, setD25] = useState(0);
  const [d26, setD26] = useState(0);
  const [d27, setD27] = useState(0);
  const [d28, setD28] = useState(0);
  const [d29, setD29] = useState(0);
  const [d30, setD30] = useState(0);

  const [e1, setE1] = useState(0);
  const [e2, setE2] = useState(0);
  const [e3, setE3] = useState(0);
  const [e4, setE4] = useState(0);
  const [e5, setE5] = useState(0);
  const [e6, setE6] = useState(0);
  const [e7, setE7] = useState(0);
  const [e8, setE8] = useState(0);
  const [e9, setE9] = useState(0);
  const [e10, setE10] = useState(0);
  const [e11, setE11] = useState(0);
  const [e12, setE12] = useState(0);
  const [e13, setE13] = useState(0);
  const [e14, setE14] = useState(0);
  const [e15, setE15] = useState(0);
  const [e16, setE16] = useState(0);
  const [e17, setE17] = useState(0);
  const [e18, setE18] = useState(0);
  const [e19, setE19] = useState(0);
  const [e20, setE20] = useState(0);
  const [e21, setE21] = useState(0);
  const [e22, setE22] = useState(0);
  const [e23, setE23] = useState(0);
  const [e24, setE24] = useState(0);
  const [e25, setE25] = useState(0);
  const [e26, setE26] = useState(0);
  const [e27, setE27] = useState(0);
  const [e28, setE28] = useState(0);
  const [e29, setE29] = useState(0);
  const [e30, setE30] = useState(0);

  const [f1, setF1] = useState(0);
  const [f2, setF2] = useState(0);
  const [f3, setF3] = useState(0);
  const [f4, setF4] = useState(0);
  const [f5, setF5] = useState(0);
  const [f6, setF6] = useState(0);
  const [f7, setF7] = useState(0);
  const [f8, setF8] = useState(0);
  const [f9, setF9] = useState(0);
  const [f10, setF10] = useState(0);
  const [f11, setF11] = useState(0);
  const [f12, setF12] = useState(0);
  const [f13, setF13] = useState(0);
  const [f14, setF14] = useState(0);
  const [f15, setF15] = useState(0);
  const [f16, setF16] = useState(0);
  const [f17, setF17] = useState(0);
  const [f18, setF18] = useState(0);
  const [f19, setF19] = useState(0);
  const [f20, setF20] = useState(0);
  const [f21, setF21] = useState(0);
  const [f22, setF22] = useState(0);
  const [f23, setF23] = useState(0);
  const [f24, setF24] = useState(0);
  const [f25, setF25] = useState(0);
  const [f26, setF26] = useState(0);
  const [f27, setF27] = useState(0);
  const [f28, setF28] = useState(0);
  const [f29, setF29] = useState(0);
  const [f30, setF30] = useState(0);

  const [g1, setG1] = useState(0);
  const [g2, setG2] = useState(0);
  const [g3, setG3] = useState(0);
  const [g4, setG4] = useState(0);
  const [g5, setG5] = useState(0);
  const [g6, setG6] = useState(0);
  const [g7, setG7] = useState(0);
  const [g8, setG8] = useState(0);
  const [g9, setG9] = useState(0);
  const [g10, setG10] = useState(0);
  const [g11, setG11] = useState(0);
  const [g12, setG12] = useState(0);
  const [g13, setG13] = useState(0);
  const [g14, setG14] = useState(0);
  const [g15, setG15] = useState(0);
  const [g16, setG16] = useState(0);
  const [g17, setG17] = useState(0);
  const [g18, setG18] = useState(0);
  const [g19, setG19] = useState(0);
  const [g20, setG20] = useState(0);
  const [g21, setG21] = useState(0);
  const [g22, setG22] = useState(0);
  const [g23, setG23] = useState(0);
  const [g24, setG24] = useState(0);
  const [g25, setG25] = useState(0);
  const [g26, setG26] = useState(0);
  const [g27, setG27] = useState(0);
  const [g28, setG28] = useState(0);
  const [g29, setG29] = useState(0);
  const [g30, setG30] = useState(0);

  const [h1, setH1] = useState(0);
  const [h2, setH2] = useState(0);
  const [h3, setH3] = useState(0);
  const [h4, setH4] = useState(0);
  const [h5, setH5] = useState(0);
  const [h6, setH6] = useState(0);
  const [h7, setH7] = useState(0);
  const [h8, setH8] = useState(0);
  const [h9, setH9] = useState(0);
  const [h10, setH10] = useState(0);
  const [h11, setH11] = useState(0);
  const [h12, setH12] = useState(0);
  const [h13, setH13] = useState(0);
  const [h14, setH14] = useState(0);
  const [h15, setH15] = useState(0);
  const [h16, setH16] = useState(0);
  const [h17, setH17] = useState(0);
  const [h18, setH18] = useState(0);
  const [h19, setH19] = useState(0);
  const [h20, setH20] = useState(0);
  const [h21, setH21] = useState(0);
  const [h22, setH22] = useState(0);
  const [h23, setH23] = useState(0);
  const [h24, setH24] = useState(0);
  const [h25, setH25] = useState(0);
  const [h26, setH26] = useState(0);
  const [h27, setH27] = useState(0);
  const [h28, setH28] = useState(0);
  const [h29, setH29] = useState(0);
  const [h30, setH30] = useState(0);

  const [i1, setI1] = useState(0);
  const [i2, setI2] = useState(0);
  const [i3, setI3] = useState(0);
  const [i4, setI4] = useState(0);
  const [i5, setI5] = useState(0);
  const [i6, setI6] = useState(0);
  const [i7, setI7] = useState(0);
  const [i8, setI8] = useState(0);
  const [i9, setI9] = useState(0);
  const [i10, setI10] = useState(0);
  const [i11, setI11] = useState(0);
  const [i12, setI12] = useState(0);
  const [i13, setI13] = useState(0);
  const [i14, setI14] = useState(0);
  const [i15, setI15] = useState(0);
  const [i16, setI16] = useState(0);
  const [i17, setI17] = useState(0);
  const [i18, setI18] = useState(0);
  const [i19, setI19] = useState(0);
  const [i20, setI20] = useState(0);
  const [i21, setI21] = useState(0);
  const [i22, setI22] = useState(0);
  const [i23, setI23] = useState(0);
  const [i24, setI24] = useState(0);
  const [i25, setI25] = useState(0);
  const [i26, setI26] = useState(0);
  const [i27, setI27] = useState(0);
  const [i28, setI28] = useState(0);
  const [i29, setI29] = useState(0);
  const [i30, setI30] = useState(0);

  const total_1 =
    Number(a1) +
    Number(b1) +
    Number(c1) +
    Number(d1) +
    Number(e1) +
    Number(f1) +
    Number(g1) +
    Number(h1) +
    Number(i1);

  const total_2 =
    Number(a2) +
    Number(b2) +
    Number(c2) +
    Number(d2) +
    Number(e2) +
    Number(f2) +
    Number(g2) +
    Number(h2) +
    Number(i2);

  const total_3 =
    Number(a3) +
    Number(b3) +
    Number(c3) +
    Number(d3) +
    Number(e3) +
    Number(f3) +
    Number(g3) +
    Number(h3) +
    Number(i3);

  const total_4 =
    Number(a4) +
    Number(b4) +
    Number(c4) +
    Number(d4) +
    Number(e4) +
    Number(f4) +
    Number(g4) +
    Number(h4) +
    Number(i4);

  const total_5 =
    Number(a5) +
    Number(b5) +
    Number(c5) +
    Number(d5) +
    Number(e5) +
    Number(f5) +
    Number(g5) +
    Number(h5) +
    Number(i5);

  const total_6 =
    Number(a6) +
    Number(b6) +
    Number(c6) +
    Number(d6) +
    Number(e6) +
    Number(f6) +
    Number(g6) +
    Number(h6) +
    Number(i6);

  const total_7 =
    Number(a7) +
    Number(b7) +
    Number(c7) +
    Number(d7) +
    Number(e7) +
    Number(f7) +
    Number(g7) +
    Number(h7) +
    Number(i7);

  const total_8 =
    Number(a8) +
    Number(b8) +
    Number(c8) +
    Number(d8) +
    Number(e8) +
    Number(f8) +
    Number(g8) +
    Number(h8) +
    Number(i8);

  const total_9 =
    Number(a9) +
    Number(b9) +
    Number(c9) +
    Number(d9) +
    Number(e9) +
    Number(f9) +
    Number(g9) +
    Number(h9) +
    Number(i9);

  const total_10 =
    Number(a10) +
    Number(b10) +
    Number(c10) +
    Number(d10) +
    Number(e10) +
    Number(f10) +
    Number(g10) +
    Number(h10) +
    Number(i10);

  const total_11 =
    Number(a11) +
    Number(b11) +
    Number(c11) +
    Number(d11) +
    Number(e11) +
    Number(f11) +
    Number(g11) +
    Number(h11) +
    Number(i11);

  const total_12 =
    Number(a12) +
    Number(b12) +
    Number(c12) +
    Number(d12) +
    Number(e12) +
    Number(f12) +
    Number(g12) +
    Number(h12) +
    Number(i12);

  const total_13 =
    Number(a13) +
    Number(b13) +
    Number(c13) +
    Number(d13) +
    Number(e13) +
    Number(f13) +
    Number(g13) +
    Number(h13) +
    Number(i13);

  const total_14 =
    Number(a14) +
    Number(b14) +
    Number(c14) +
    Number(d14) +
    Number(e14) +
    Number(f14) +
    Number(g14) +
    Number(h14) +
    Number(i14);

  const total_15 =
    Number(a15) +
    Number(b15) +
    Number(c15) +
    Number(d15) +
    Number(e15) +
    Number(f15) +
    Number(g15) +
    Number(h15) +
    Number(i15);

  const total_16 =
    Number(a16) +
    Number(b16) +
    Number(c16) +
    Number(d16) +
    Number(e16) +
    Number(f16) +
    Number(g16) +
    Number(h16) +
    Number(i16);

  const total_17 =
    Number(a17) +
    Number(b17) +
    Number(c17) +
    Number(d17) +
    Number(e17) +
    Number(f17) +
    Number(g17) +
    Number(h17) +
    Number(i17);

  const total_18 =
    Number(a18) +
    Number(b18) +
    Number(c18) +
    Number(d18) +
    Number(e18) +
    Number(f18) +
    Number(g18) +
    Number(h18) +
    Number(i18);

  const total_19 =
    Number(a19) +
    Number(b19) +
    Number(c19) +
    Number(d19) +
    Number(e19) +
    Number(f19) +
    Number(g19) +
    Number(h19) +
    Number(i19);

  const total_20 =
    Number(a20) +
    Number(b20) +
    Number(c20) +
    Number(d20) +
    Number(e20) +
    Number(f20) +
    Number(g20) +
    Number(h20) +
    Number(i20);

  const total_21 =
    Number(a21) +
    Number(b21) +
    Number(c21) +
    Number(d21) +
    Number(e21) +
    Number(f21) +
    Number(g21) +
    Number(h21) +
    Number(i21);

  const total_22 =
    Number(a22) +
    Number(b22) +
    Number(c22) +
    Number(d22) +
    Number(e22) +
    Number(f22) +
    Number(g22) +
    Number(h22) +
    Number(i22);

  const total_23 =
    Number(a23) +
    Number(b23) +
    Number(c23) +
    Number(d23) +
    Number(e23) +
    Number(f23) +
    Number(g23) +
    Number(h23) +
    Number(i23);

  const total_24 =
    Number(a24) +
    Number(b24) +
    Number(c24) +
    Number(d24) +
    Number(e24) +
    Number(f24) +
    Number(g24) +
    Number(h24) +
    Number(i24);

  const total_25 =
    Number(a25) +
    Number(b25) +
    Number(c25) +
    Number(d25) +
    Number(e25) +
    Number(f25) +
    Number(g25) +
    Number(h25) +
    Number(i25);

  const total_26 =
    Number(a26) +
    Number(b26) +
    Number(c26) +
    Number(d26) +
    Number(e26) +
    Number(f26) +
    Number(g26) +
    Number(h26) +
    Number(i26);

  const total_27 =
    Number(a27) +
    Number(b27) +
    Number(c27) +
    Number(d27) +
    Number(e27) +
    Number(f27) +
    Number(g27) +
    Number(h27) +
    Number(i27);

  const total_28 =
    Number(a28) +
    Number(b28) +
    Number(c28) +
    Number(d28) +
    Number(e28) +
    Number(f28) +
    Number(g28) +
    Number(h28) +
    Number(i28);

  const total_29 =
    Number(a29) +
    Number(b29) +
    Number(c29) +
    Number(d29) +
    Number(e29) +
    Number(f29) +
    Number(g29) +
    Number(h29) +
    Number(i29);

  const total_30 =
    Number(a30) +
    Number(b30) +
    Number(c30) +
    Number(d30) +
    Number(e30) +
    Number(f30) +
    Number(g30) +
    Number(h30) +
    Number(i30);

  const total_day_1 = useCoinFormatter.format(
    Math.floor(
      valueTimeBasicDiurnal * a1 +
        valueTimeNocturnalBasic * b1 +
        valueTimeDiurnalExtra * c1 +
        valueTimeNocturnalExtra * d1 +
        valueTimeFestiveDiurnalBasic * e1 +
        valueTimeFestiveNocturnalBasic * f1 +
        valueTimeFestiveDiurnalExtra * g1 +
        valueTimeFestiveNocturnalExtra * h1 +
        valueTimeCompensatory * i1
    )
  );

  const total_day_2 = useCoinFormatter.format(
    Math.floor(
      valueTimeBasicDiurnal * a2 +
        valueTimeNocturnalBasic * b2 +
        valueTimeDiurnalExtra * c2 +
        valueTimeNocturnalExtra * d2 +
        valueTimeFestiveDiurnalBasic * e2 +
        valueTimeFestiveNocturnalBasic * f2 +
        valueTimeFestiveDiurnalExtra * g2 +
        valueTimeFestiveNocturnalExtra * h2 +
        valueTimeCompensatory * i2
    )
  );

  const total_day_3 = useCoinFormatter.format(
    Math.floor(
      valueTimeBasicDiurnal * a3 +
        valueTimeNocturnalBasic * b3 +
        valueTimeDiurnalExtra * c3 +
        valueTimeNocturnalExtra * d3 +
        valueTimeFestiveDiurnalBasic * e3 +
        valueTimeFestiveNocturnalBasic * f3 +
        valueTimeFestiveDiurnalExtra * g3 +
        valueTimeFestiveNocturnalExtra * h3 +
        valueTimeCompensatory * i3
    )
  );

  const total_day_4 = useCoinFormatter.format(
    Math.floor(
      valueTimeBasicDiurnal * a4 +
        valueTimeNocturnalBasic * b4 +
        valueTimeDiurnalExtra * c4 +
        valueTimeNocturnalExtra * d4 +
        valueTimeFestiveDiurnalBasic * e4 +
        valueTimeFestiveNocturnalBasic * f4 +
        valueTimeFestiveDiurnalExtra * g4 +
        valueTimeFestiveNocturnalExtra * h4 +
        valueTimeCompensatory * i4
    )
  );

  const total_day_5 = useCoinFormatter.format(
    Math.floor(
      valueTimeBasicDiurnal * a5 +
        valueTimeNocturnalBasic * b5 +
        valueTimeDiurnalExtra * c5 +
        valueTimeNocturnalExtra * d5 +
        valueTimeFestiveDiurnalBasic * e5 +
        valueTimeFestiveNocturnalBasic * f5 +
        valueTimeFestiveDiurnalExtra * g5 +
        valueTimeFestiveNocturnalExtra * h5 +
        valueTimeCompensatory * i5
    )
  );

  const total_day_6 = useCoinFormatter.format(
    Math.floor(
      valueTimeBasicDiurnal * a6 +
        valueTimeNocturnalBasic * b6 +
        valueTimeDiurnalExtra * c6 +
        valueTimeNocturnalExtra * d6 +
        valueTimeFestiveDiurnalBasic * e6 +
        valueTimeFestiveNocturnalBasic * f6 +
        valueTimeFestiveDiurnalExtra * g6 +
        valueTimeFestiveNocturnalExtra * h6 +
        valueTimeCompensatory * i6
    )
  );

  const total_day_7 = useCoinFormatter.format(
    Math.floor(
      valueTimeBasicDiurnal * a7 +
        valueTimeNocturnalBasic * b7 +
        valueTimeDiurnalExtra * c7 +
        valueTimeNocturnalExtra * d7 +
        valueTimeFestiveDiurnalBasic * e7 +
        valueTimeFestiveNocturnalBasic * f7 +
        valueTimeFestiveDiurnalExtra * g7 +
        valueTimeFestiveNocturnalExtra * h7 +
        valueTimeCompensatory * i7
    )
  );

  const total_day_8 = useCoinFormatter.format(
    Math.floor(
      valueTimeBasicDiurnal * a8 +
        valueTimeNocturnalBasic * b8 +
        valueTimeDiurnalExtra * c8 +
        valueTimeNocturnalExtra * d8 +
        valueTimeFestiveDiurnalBasic * e8 +
        valueTimeFestiveNocturnalBasic * f8 +
        valueTimeFestiveDiurnalExtra * g8 +
        valueTimeFestiveNocturnalExtra * h8 +
        valueTimeCompensatory * i8
    )
  );

  const total_day_9 = useCoinFormatter.format(
    Math.floor(
      valueTimeBasicDiurnal * a9 +
        valueTimeNocturnalBasic * b9 +
        valueTimeDiurnalExtra * c9 +
        valueTimeNocturnalExtra * d9 +
        valueTimeFestiveDiurnalBasic * e9 +
        valueTimeFestiveNocturnalBasic * f9 +
        valueTimeFestiveDiurnalExtra * g9 +
        valueTimeFestiveNocturnalExtra * h9 +
        valueTimeCompensatory * i9
    )
  );

  const total_day_10 = useCoinFormatter.format(
    Math.floor(
      valueTimeBasicDiurnal * a10 +
        valueTimeNocturnalBasic * b10 +
        valueTimeDiurnalExtra * c10 +
        valueTimeNocturnalExtra * d10 +
        valueTimeFestiveDiurnalBasic * e10 +
        valueTimeFestiveNocturnalBasic * f10 +
        valueTimeFestiveDiurnalExtra * g10 +
        valueTimeFestiveNocturnalExtra * h10 +
        valueTimeCompensatory * i10
    )
  );

  const total_day_11 = useCoinFormatter.format(
    Math.floor(
      valueTimeBasicDiurnal * a11 +
        valueTimeNocturnalBasic * b11 +
        valueTimeDiurnalExtra * c11 +
        valueTimeNocturnalExtra * d11 +
        valueTimeFestiveDiurnalBasic * e11 +
        valueTimeFestiveNocturnalBasic * f11 +
        valueTimeFestiveDiurnalExtra * g11 +
        valueTimeFestiveNocturnalExtra * h11 +
        valueTimeCompensatory * i11
    )
  );

  const total_day_12 = useCoinFormatter.format(
    Math.floor(
      valueTimeBasicDiurnal * a12 +
        valueTimeNocturnalBasic * b12 +
        valueTimeDiurnalExtra * c12 +
        valueTimeNocturnalExtra * d12 +
        valueTimeFestiveDiurnalBasic * e12 +
        valueTimeFestiveNocturnalBasic * f12 +
        valueTimeFestiveDiurnalExtra * g12 +
        valueTimeFestiveNocturnalExtra * h12 +
        valueTimeCompensatory * i12
    )
  );

  const total_day_13 = useCoinFormatter.format(
    Math.floor(
      valueTimeBasicDiurnal * a13 +
        valueTimeNocturnalBasic * b13 +
        valueTimeDiurnalExtra * c13 +
        valueTimeNocturnalExtra * d13 +
        valueTimeFestiveDiurnalBasic * e13 +
        valueTimeFestiveNocturnalBasic * f13 +
        valueTimeFestiveDiurnalExtra * g13 +
        valueTimeFestiveNocturnalExtra * h13 +
        valueTimeCompensatory * i13
    )
  );

  const total_day_14 = useCoinFormatter.format(
    Math.floor(
      valueTimeBasicDiurnal * a14 +
        valueTimeNocturnalBasic * b14 +
        valueTimeDiurnalExtra * c14 +
        valueTimeNocturnalExtra * d14 +
        valueTimeFestiveDiurnalBasic * e14 +
        valueTimeFestiveNocturnalBasic * f14 +
        valueTimeFestiveDiurnalExtra * g14 +
        valueTimeFestiveNocturnalExtra * h14 +
        valueTimeCompensatory * i14
    )
  );

  const total_day_15 = useCoinFormatter.format(
    Math.floor(
      valueTimeBasicDiurnal * a15 +
        valueTimeNocturnalBasic * b15 +
        valueTimeDiurnalExtra * c15 +
        valueTimeNocturnalExtra * d15 +
        valueTimeFestiveDiurnalBasic * e15 +
        valueTimeFestiveNocturnalBasic * f15 +
        valueTimeFestiveDiurnalExtra * g15 +
        valueTimeFestiveNocturnalExtra * h15 +
        valueTimeCompensatory * i15
    )
  );

  const total_day_16 = useCoinFormatter.format(
    Math.floor(
      valueTimeBasicDiurnal * a16 +
        valueTimeNocturnalBasic * b16 +
        valueTimeDiurnalExtra * c16 +
        valueTimeNocturnalExtra * d16 +
        valueTimeFestiveDiurnalBasic * e16 +
        valueTimeFestiveNocturnalBasic * f16 +
        valueTimeFestiveDiurnalExtra * g16 +
        valueTimeFestiveNocturnalExtra * h16 +
        valueTimeCompensatory * i16
    )
  );

  const total_day_17 = useCoinFormatter.format(
    Math.floor(
      valueTimeBasicDiurnal * a17 +
        valueTimeNocturnalBasic * b17 +
        valueTimeDiurnalExtra * c17 +
        valueTimeNocturnalExtra * d17 +
        valueTimeFestiveDiurnalBasic * e17 +
        valueTimeFestiveNocturnalBasic * f17 +
        valueTimeFestiveDiurnalExtra * g17 +
        valueTimeFestiveNocturnalExtra * h17 +
        valueTimeCompensatory * i17
    )
  );

  const total_day_18 = useCoinFormatter.format(
    Math.floor(
      valueTimeBasicDiurnal * a18 +
        valueTimeNocturnalBasic * b18 +
        valueTimeDiurnalExtra * c18 +
        valueTimeNocturnalExtra * d18 +
        valueTimeFestiveDiurnalBasic * e18 +
        valueTimeFestiveNocturnalBasic * f18 +
        valueTimeFestiveDiurnalExtra * g18 +
        valueTimeFestiveNocturnalExtra * h18 +
        valueTimeCompensatory * i18
    )
  );

  const total_day_19 = useCoinFormatter.format(
    Math.floor(
      valueTimeBasicDiurnal * a19 +
        valueTimeNocturnalBasic * b19 +
        valueTimeDiurnalExtra * c19 +
        valueTimeNocturnalExtra * d19 +
        valueTimeFestiveDiurnalBasic * e19 +
        valueTimeFestiveNocturnalBasic * f19 +
        valueTimeFestiveDiurnalExtra * g19 +
        valueTimeFestiveNocturnalExtra * h19 +
        valueTimeCompensatory * i19
    )
  );

  const total_day_20 = useCoinFormatter.format(
    Math.floor(
      valueTimeBasicDiurnal * a20 +
        valueTimeNocturnalBasic * b20 +
        valueTimeDiurnalExtra * c20 +
        valueTimeNocturnalExtra * d20 +
        valueTimeFestiveDiurnalBasic * e20 +
        valueTimeFestiveNocturnalBasic * f20 +
        valueTimeFestiveDiurnalExtra * g20 +
        valueTimeFestiveNocturnalExtra * h20 +
        valueTimeCompensatory * i20
    )
  );

  const total_day_21 = useCoinFormatter.format(
    Math.floor(
      valueTimeBasicDiurnal * a21 +
        valueTimeNocturnalBasic * b21 +
        valueTimeDiurnalExtra * c21 +
        valueTimeNocturnalExtra * d21 +
        valueTimeFestiveDiurnalBasic * e21 +
        valueTimeFestiveNocturnalBasic * f21 +
        valueTimeFestiveDiurnalExtra * g21 +
        valueTimeFestiveNocturnalExtra * h21 +
        valueTimeCompensatory * i21
    )
  );

  const total_day_22 = useCoinFormatter.format(
    Math.floor(
      valueTimeBasicDiurnal * a22 +
        valueTimeNocturnalBasic * b22 +
        valueTimeDiurnalExtra * c22 +
        valueTimeNocturnalExtra * d22 +
        valueTimeFestiveDiurnalBasic * e22 +
        valueTimeFestiveNocturnalBasic * f22 +
        valueTimeFestiveDiurnalExtra * g22 +
        valueTimeFestiveNocturnalExtra * h22 +
        valueTimeCompensatory * i22
    )
  );

  const total_day_23 = useCoinFormatter.format(
    Math.floor(
      valueTimeBasicDiurnal * a23 +
        valueTimeNocturnalBasic * b23 +
        valueTimeDiurnalExtra * c23 +
        valueTimeNocturnalExtra * d23 +
        valueTimeFestiveDiurnalBasic * e23 +
        valueTimeFestiveNocturnalBasic * f23 +
        valueTimeFestiveDiurnalExtra * g23 +
        valueTimeFestiveNocturnalExtra * h23 +
        valueTimeCompensatory * i23
    )
  );

  const total_day_24 = useCoinFormatter.format(
    Math.floor(
      valueTimeBasicDiurnal * a24 +
        valueTimeNocturnalBasic * b24 +
        valueTimeDiurnalExtra * c24 +
        valueTimeNocturnalExtra * d24 +
        valueTimeFestiveDiurnalBasic * e24 +
        valueTimeFestiveNocturnalBasic * f24 +
        valueTimeFestiveDiurnalExtra * g24 +
        valueTimeFestiveNocturnalExtra * h24 +
        valueTimeCompensatory * i24
    )
  );

  const total_day_25 = useCoinFormatter.format(
    Math.floor(
      valueTimeBasicDiurnal * a25 +
        valueTimeNocturnalBasic * b25 +
        valueTimeDiurnalExtra * c25 +
        valueTimeNocturnalExtra * d25 +
        valueTimeFestiveDiurnalBasic * e25 +
        valueTimeFestiveNocturnalBasic * f25 +
        valueTimeFestiveDiurnalExtra * g25 +
        valueTimeFestiveNocturnalExtra * h25 +
        valueTimeCompensatory * i25
    )
  );

  const total_day_26 = useCoinFormatter.format(
    Math.floor(
      valueTimeBasicDiurnal * a26 +
        valueTimeNocturnalBasic * b26 +
        valueTimeDiurnalExtra * c26 +
        valueTimeNocturnalExtra * d26 +
        valueTimeFestiveDiurnalBasic * e26 +
        valueTimeFestiveNocturnalBasic * f26 +
        valueTimeFestiveDiurnalExtra * g26 +
        valueTimeFestiveNocturnalExtra * h26 +
        valueTimeCompensatory * i26
    )
  );

  const total_day_27 = useCoinFormatter.format(
    Math.floor(
      valueTimeBasicDiurnal * a27 +
        valueTimeNocturnalBasic * b27 +
        valueTimeDiurnalExtra * c27 +
        valueTimeNocturnalExtra * d27 +
        valueTimeFestiveDiurnalBasic * e27 +
        valueTimeFestiveNocturnalBasic * f27 +
        valueTimeFestiveDiurnalExtra * g27 +
        valueTimeFestiveNocturnalExtra * h27 +
        valueTimeCompensatory * i27
    )
  );

  const total_day_28 = useCoinFormatter.format(
    Math.floor(
      valueTimeBasicDiurnal * a28 +
        valueTimeNocturnalBasic * b28 +
        valueTimeDiurnalExtra * c28 +
        valueTimeNocturnalExtra * d28 +
        valueTimeFestiveDiurnalBasic * e28 +
        valueTimeFestiveNocturnalBasic * f28 +
        valueTimeFestiveDiurnalExtra * g28 +
        valueTimeFestiveNocturnalExtra * h28 +
        valueTimeCompensatory * i28
    )
  );

  const total_day_29 = useCoinFormatter.format(
    Math.floor(
      valueTimeBasicDiurnal * a29 +
        valueTimeNocturnalBasic * b29 +
        valueTimeDiurnalExtra * c29 +
        valueTimeNocturnalExtra * d29 +
        valueTimeFestiveDiurnalBasic * e29 +
        valueTimeFestiveNocturnalBasic * f29 +
        valueTimeFestiveDiurnalExtra * g29 +
        valueTimeFestiveNocturnalExtra * h29 +
        valueTimeCompensatory * i29
    )
  );

  const total_day_30 = useCoinFormatter.format(
    Math.floor(
      valueTimeBasicDiurnal * a30 +
        valueTimeNocturnalBasic * b30 +
        valueTimeDiurnalExtra * c30 +
        valueTimeNocturnalExtra * d30 +
        valueTimeFestiveDiurnalBasic * e30 +
        valueTimeFestiveNocturnalBasic * f30 +
        valueTimeFestiveDiurnalExtra * g30 +
        valueTimeFestiveNocturnalExtra * h30 +
        valueTimeCompensatory * i30
    )
  );

  const total_hourly_1 =
    Number(a1) +
    Number(a2) +
    Number(a3) +
    Number(a4) +
    Number(a5) +
    Number(a6) +
    Number(a7) +
    Number(a8) +
    Number(a9) +
    Number(a10) +
    Number(a11) +
    Number(a12) +
    Number(a13) +
    Number(a14) +
    Number(a15) +
    Number(a16) +
    Number(a17) +
    Number(a18) +
    Number(a19) +
    Number(a20) +
    Number(a21) +
    Number(a22) +
    Number(a23) +
    Number(a24) +
    Number(a25) +
    Number(a26) +
    Number(a27) +
    Number(a28) +
    Number(a29) +
    Number(a30);

  const total_hourly_2 =
    Number(b1) +
    Number(b2) +
    Number(b3) +
    Number(b4) +
    Number(b5) +
    Number(b6) +
    Number(b7) +
    Number(b8) +
    Number(b9) +
    Number(b10) +
    Number(b11) +
    Number(b12) +
    Number(b13) +
    Number(b14) +
    Number(b15) +
    Number(b16) +
    Number(b17) +
    Number(b18) +
    Number(b19) +
    Number(b20) +
    Number(b21) +
    Number(b22) +
    Number(b23) +
    Number(b24) +
    Number(b25) +
    Number(b26) +
    Number(b27) +
    Number(b28) +
    Number(b29) +
    Number(b30);

  const total_hourly_3 =
    Number(c1) +
    Number(c2) +
    Number(c3) +
    Number(c4) +
    Number(c5) +
    Number(c6) +
    Number(c7) +
    Number(c8) +
    Number(c9) +
    Number(c10) +
    Number(c11) +
    Number(c12) +
    Number(c13) +
    Number(c14) +
    Number(c15) +
    Number(c16) +
    Number(c17) +
    Number(c18) +
    Number(c19) +
    Number(c20) +
    Number(c21) +
    Number(c22) +
    Number(c23) +
    Number(c24) +
    Number(c25) +
    Number(c26) +
    Number(c27) +
    Number(c28) +
    Number(c29) +
    Number(c30);

  const total_hourly_4 =
    Number(d1) +
    Number(d2) +
    Number(d3) +
    Number(d4) +
    Number(d5) +
    Number(d6) +
    Number(d7) +
    Number(d8) +
    Number(d9) +
    Number(d10) +
    Number(d11) +
    Number(d12) +
    Number(d13) +
    Number(d14) +
    Number(d15) +
    Number(d16) +
    Number(d17) +
    Number(d18) +
    Number(d19) +
    Number(d20) +
    Number(d21) +
    Number(d22) +
    Number(d23) +
    Number(d24) +
    Number(d25) +
    Number(d26) +
    Number(d27) +
    Number(d28) +
    Number(d29) +
    Number(d30);

  const total_hourly_5 =
    Number(e1) +
    Number(e2) +
    Number(e3) +
    Number(e4) +
    Number(e5) +
    Number(e6) +
    Number(e7) +
    Number(e8) +
    Number(e9) +
    Number(e10) +
    Number(e11) +
    Number(e12) +
    Number(e13) +
    Number(e14) +
    Number(e15) +
    Number(e16) +
    Number(e17) +
    Number(e18) +
    Number(e19) +
    Number(e20) +
    Number(e21) +
    Number(e22) +
    Number(e23) +
    Number(e24) +
    Number(e25) +
    Number(e26) +
    Number(e27) +
    Number(e28) +
    Number(e29) +
    Number(e30);

  const total_hourly_6 =
    Number(f1) +
    Number(f2) +
    Number(f3) +
    Number(f4) +
    Number(f5) +
    Number(f6) +
    Number(f7) +
    Number(f8) +
    Number(f9) +
    Number(f10) +
    Number(f11) +
    Number(f12) +
    Number(f13) +
    Number(f14) +
    Number(f15) +
    Number(f16) +
    Number(f17) +
    Number(f18) +
    Number(f19) +
    Number(f20) +
    Number(f21) +
    Number(f22) +
    Number(f23) +
    Number(f24) +
    Number(f25) +
    Number(f26) +
    Number(f27) +
    Number(f28) +
    Number(f29) +
    Number(f30);

  const total_hourly_7 =
    Number(g1) +
    Number(g2) +
    Number(g3) +
    Number(g4) +
    Number(g5) +
    Number(g6) +
    Number(g7) +
    Number(g8) +
    Number(g9) +
    Number(g10) +
    Number(g11) +
    Number(g12) +
    Number(g13) +
    Number(g14) +
    Number(g15) +
    Number(g16) +
    Number(g17) +
    Number(g18) +
    Number(g19) +
    Number(g20) +
    Number(g21) +
    Number(g22) +
    Number(g23) +
    Number(g24) +
    Number(g25) +
    Number(g26) +
    Number(g27) +
    Number(g28) +
    Number(g29) +
    Number(g30);

  const total_hourly_8 =
    Number(h1) +
    Number(h2) +
    Number(h3) +
    Number(h4) +
    Number(h5) +
    Number(h6) +
    Number(h7) +
    Number(h8) +
    Number(h9) +
    Number(h10) +
    Number(h11) +
    Number(h12) +
    Number(h13) +
    Number(h14) +
    Number(h15) +
    Number(h16) +
    Number(h17) +
    Number(h18) +
    Number(h19) +
    Number(h20) +
    Number(h21) +
    Number(h22) +
    Number(h23) +
    Number(h24) +
    Number(h25) +
    Number(h26) +
    Number(h27) +
    Number(h28) +
    Number(h29) +
    Number(h30);

  const total_hourly_9 =
    Number(i1) +
    Number(i2) +
    Number(i3) +
    Number(i4) +
    Number(i5) +
    Number(i6) +
    Number(i7) +
    Number(i8) +
    Number(i9) +
    Number(i10) +
    Number(i11) +
    Number(i12) +
    Number(i13) +
    Number(i14) +
    Number(i15) +
    Number(i16) +
    Number(i17) +
    Number(i18) +
    Number(i19) +
    Number(i20) +
    Number(i21) +
    Number(i22) +
    Number(i23) +
    Number(i24) +
    Number(i25) +
    Number(i26) +
    Number(i27) +
    Number(i28) +
    Number(i29) +
    Number(i30);

  const cleanTable = () => {
    setA1(0);
    setA2(0);
    setA3(0);
    setA4(0);
    setA5(0);
    setA6(0);
    setA7(0);
    setA8(0);
    setA9(0);
    setA10(0);
    setA11(0);
    setA12(0);
    setA13(0);
    setA14(0);
    setA15(0);
    setA16(0);
    setA17(0);
    setA18(0);
    setA19(0);
    setA20(0);
    setA21(0);
    setA22(0);
    setA23(0);
    setA24(0);
    setA25(0);
    setA26(0);
    setA27(0);
    setA28(0);
    setA29(0);
    setA30(0);

    setB1(0);
    setB2(0);
    setB3(0);
    setB4(0);
    setB5(0);
    setB6(0);
    setB7(0);
    setB8(0);
    setB9(0);
    setB10(0);
    setB11(0);
    setB12(0);
    setB13(0);
    setB14(0);
    setB15(0);
    setB16(0);
    setB17(0);
    setB18(0);
    setB19(0);
    setB20(0);
    setB21(0);
    setB22(0);
    setB23(0);
    setB24(0);
    setB25(0);
    setB26(0);
    setB27(0);
    setB28(0);
    setB29(0);
    setB30(0);

    setC1(0);
    setC2(0);
    setC3(0);
    setC4(0);
    setC5(0);
    setC6(0);
    setC7(0);
    setC8(0);
    setC9(0);
    setC10(0);
    setC11(0);
    setC12(0);
    setC13(0);
    setC14(0);
    setC15(0);
    setC16(0);
    setC17(0);
    setC18(0);
    setC19(0);
    setC20(0);
    setC21(0);
    setC22(0);
    setC23(0);
    setC24(0);
    setC25(0);
    setC26(0);
    setC27(0);
    setC28(0);
    setC29(0);
    setC30(0);

    setD1(0);
    setD2(0);
    setD3(0);
    setD4(0);
    setD5(0);
    setD6(0);
    setD7(0);
    setD8(0);
    setD9(0);
    setD10(0);
    setD11(0);
    setD12(0);
    setD13(0);
    setD14(0);
    setD15(0);
    setD16(0);
    setD17(0);
    setD18(0);
    setD19(0);
    setD20(0);
    setD21(0);
    setD22(0);
    setD23(0);
    setD24(0);
    setD25(0);
    setD26(0);
    setD27(0);
    setD28(0);
    setD29(0);
    setD30(0);

    setE1(0);
    setE2(0);
    setE3(0);
    setE4(0);
    setE5(0);
    setE6(0);
    setE7(0);
    setE8(0);
    setE9(0);
    setE10(0);
    setE11(0);
    setE12(0);
    setE13(0);
    setE14(0);
    setE15(0);
    setE16(0);
    setE17(0);
    setE18(0);
    setE19(0);
    setE20(0);
    setE21(0);
    setE22(0);
    setE23(0);
    setE24(0);
    setE25(0);
    setE26(0);
    setE27(0);
    setE28(0);
    setE29(0);
    setE30(0);

    setF1(0);
    setF2(0);
    setF3(0);
    setF4(0);
    setF5(0);
    setF6(0);
    setF7(0);
    setF8(0);
    setF9(0);
    setF10(0);
    setF11(0);
    setF12(0);
    setF13(0);
    setF14(0);
    setF15(0);
    setF16(0);
    setF17(0);
    setF18(0);
    setF19(0);
    setF20(0);
    setF21(0);
    setF22(0);
    setF23(0);
    setF24(0);
    setF25(0);
    setF26(0);
    setF27(0);
    setF28(0);
    setF29(0);
    setF30(0);

    setG1(0);
    setG2(0);
    setG3(0);
    setG4(0);
    setG5(0);
    setG6(0);
    setG7(0);
    setG8(0);
    setG9(0);
    setG10(0);
    setG11(0);
    setG12(0);
    setG13(0);
    setG14(0);
    setG15(0);
    setG16(0);
    setG17(0);
    setG18(0);
    setG19(0);
    setG20(0);
    setG21(0);
    setG22(0);
    setG23(0);
    setG24(0);
    setG25(0);
    setG26(0);
    setG27(0);
    setG28(0);
    setG29(0);
    setG30(0);

    setH1(0);
    setH2(0);
    setH3(0);
    setH4(0);
    setH5(0);
    setH6(0);
    setH7(0);
    setH8(0);
    setH9(0);
    setH10(0);
    setH11(0);
    setH12(0);
    setH13(0);
    setH14(0);
    setH15(0);
    setH16(0);
    setH17(0);
    setH18(0);
    setH19(0);
    setH20(0);
    setH21(0);
    setH22(0);
    setH23(0);
    setH24(0);
    setH25(0);
    setH26(0);
    setH27(0);
    setH28(0);
    setH29(0);
    setH30(0);

    setI1(0);
    setI2(0);
    setI3(0);
    setI4(0);
    setI5(0);
    setI6(0);
    setI7(0);
    setI8(0);
    setI9(0);
    setI10(0);
    setI11(0);
    setI12(0);
    setI13(0);
    setI14(0);
    setI15(0);
    setI16(0);
    setI17(0);
    setI18(0);
    setI19(0);
    setI20(0);
    setI21(0);
    setI22(0);
    setI23(0);
    setI24(0);
    setI25(0);
    setI26(0);
    setI27(0);
    setI28(0);
    setI29(0);
    setI30(0);
  };

  const completePayroll = () => {
    const data = {
      hDiurnalBasic: total_hourly_1,
      hNocturnalBasic: total_hourly_2,
      hDiurnalExtra: total_hourly_3,
      hNocturnalExtra: total_hourly_4,
      hFestiveDiurnalBasic: total_hourly_5,
      hFestiveNocturnalBasic: total_hourly_6,
      hFestiveDiurnalExtra: total_hourly_7,
      hFestiveNocturnalExtra: total_hourly_8,
      hCompensated: total_hourly_9,
      otherDeductions,
      employeeId: employeePayroll.employee.id,
      overallPayrollId: employeePayroll.overallPayroll.id,
    };

    dispatch(updateEmployeePayrollByIdThunk(data, employeePayroll.id));
    setInformation("Nomina modificada");
    navigate(
      `/talent-management/complete-payroll/${employeePayroll.overallPayrollId}`
    );
  };

  useEffect(() => {
    dispatch(getEmployeePayrollByIdThunk(id));
  }, [id, dispatch]);

  return (
    <div className="container-fluid">
      <h2>Novedades nomina empleado</h2>
      <ButtonReturn
        route={`/talent-management/complete-payroll/${employeePayroll.overallPayrollId}`}
      />
      <h6>Novedades de {employeePayroll.employee?.names} </h6>
      <h6>Salario: {useCoinFormatter.format(employeePayroll.salary)} </h6>

      <div className="form-floating mb-2">
        <input
          type="number"
          value={otherDeductions}
          onChange={(e) => setOtherDeductions(e.target.value)}
          className="form-control"
          min={0}
        />
        <label htmlFor="#">
          Otras decucciones (deduccion no especificada){" "}
        </label>
      </div>
      <button className="btn btn-warning mb-2" onClick={cleanTable}>
        Limpiar tabla
      </button>
      <button
        className="btn btn-success mb-2 mx-2"
        onClick={completePayroll}
        data-bs-target="#modalInformation"
        data-bs-toggle="modal"
      >
        <i className="bi bi-send-check"></i>
      </button>
      <h3>Registro de tiempo</h3>
      <table className="table table-bordered border-warning table-sm text-center align-middle">
        <thead>
          <tr className="text-center align-middle bg-dark text-white">
            <th scope="col">Tipo de jornada</th>
            <th scope="col">Recargo</th>
            <th scope="col">Valor Hora</th>
            <th scope="col">1</th>
            <th scope="col">2</th>
            <th scope="col">3</th>
            <th scope="col">4</th>
            <th scope="col">5</th>
            <th scope="col">6</th>
            <th scope="col">7</th>
            <th scope="col">8</th>
            <th scope="col">9</th>
            <th scope="col">10</th>
            <th scope="col">11</th>
            <th scope="col">12</th>
            <th scope="col">13</th>
            <th scope="col">14</th>
            <th scope="col">15</th>
            <th scope="col">16</th>
            <th scope="col">17</th>
            <th scope="col">18</th>
            <th scope="col">19</th>
            <th scope="col">20</th>
            <th scope="col">21</th>
            <th scope="col">22</th>
            <th scope="col">23</th>
            <th scope="col">24</th>
            <th scope="col">25</th>
            <th scope="col">26</th>
            <th scope="col">27</th>
            <th scope="col">28</th>
            <th scope="col">29</th>
            <th scope="col">30</th>
            <th scope="col">Horas X jornada</th>
          </tr>
        </thead>
        <tbody>
          <tr>
            <th scope="row" className="bg-primary text-white">
              Basico diurno (6AM-9PM)
            </th>
            <th scope="row" className="bg-dark text-white">
              100%
            </th>
            <td className="bg-dark text-white">
              {useCoinFormatter.format(valueTimeBasicDiurnal)}{" "}
            </td>
            <td>
              <div className="form-floating">
                <input
                  type="number"
                  value={a1}
                  onChange={(e) => setA1(e.target.value)}
                  className="form-control"
                  min={0}
                />
              </div>
            </td>
            <td>
              <div className="form-floating">
                <input
                  type="number"
                  value={a2}
                  onChange={(e) => setA2(e.target.value)}
                  className="form-control"
                />
              </div>
            </td>
            <td>
              <div className="form-floating">
                <input
                  type="number"
                  value={a3}
                  onChange={(e) => setA3(e.target.value)}
                  className="form-control"
                />
              </div>
            </td>
            <td>
              <div className="form-floating">
                <input
                  type="number"
                  value={a4}
                  onChange={(e) => setA4(e.target.value)}
                  className="form-control"
                />
              </div>
            </td>
            <td>
              <div className="form-floating">
                <input
                  type="number"
                  value={a5}
                  onChange={(e) => setA5(e.target.value)}
                  className="form-control"
                />
              </div>
            </td>
            <td>
              <div className="form-floating">
                <input
                  type="number"
                  value={a6}
                  onChange={(e) => setA6(e.target.value)}
                  className="form-control"
                />
              </div>
            </td>
            <td>
              <div className="form-floating">
                <input
                  type="number"
                  value={a7}
                  onChange={(e) => setA7(e.target.value)}
                  className="form-control"
                />
              </div>
            </td>
            <td>
              <div className="form-floating">
                <input
                  type="number"
                  value={a8}
                  onChange={(e) => setA8(e.target.value)}
                  className="form-control"
                />
              </div>
            </td>
            <td>
              <div className="form-floating">
                <input
                  type="number"
                  value={a9}
                  onChange={(e) => setA9(e.target.value)}
                  className="form-control"
                />
              </div>
            </td>
            <td>
              <div className="form-floating">
                <input
                  type="number"
                  value={a10}
                  onChange={(e) => setA10(e.target.value)}
                  className="form-control"
                />
              </div>
            </td>
            <td>
              <div className="form-floating">
                <input
                  type="number"
                  value={a11}
                  onChange={(e) => setA11(e.target.value)}
                  className="form-control"
                />
              </div>
            </td>
            <td>
              <div className="form-floating">
                <input
                  type="number"
                  value={a12}
                  onChange={(e) => setA12(e.target.value)}
                  className="form-control"
                />
              </div>
            </td>
            <td>
              <div className="form-floating">
                <input
                  type="number"
                  value={a13}
                  onChange={(e) => setA13(e.target.value)}
                  className="form-control"
                />
              </div>
            </td>
            <td>
              <div className="form-floating">
                <input
                  type="number"
                  value={a14}
                  onChange={(e) => setA14(e.target.value)}
                  className="form-control"
                />
              </div>
            </td>
            <td>
              <div className="form-floating">
                <input
                  type="number"
                  value={a15}
                  onChange={(e) => setA15(e.target.value)}
                  className="form-control"
                />
              </div>
            </td>
            <td>
              <div className="form-floating">
                <input
                  type="number"
                  value={a16}
                  onChange={(e) => setA16(e.target.value)}
                  className="form-control"
                />
              </div>
            </td>
            <td>
              <div className="form-floating">
                <input
                  type="number"
                  value={a17}
                  onChange={(e) => setA17(e.target.value)}
                  className="form-control"
                />
              </div>
            </td>
            <td>
              <div className="form-floating">
                <input
                  type="number"
                  value={a18}
                  onChange={(e) => setA18(e.target.value)}
                  className="form-control"
                />
              </div>
            </td>
            <td>
              <div className="form-floating">
                <input
                  type="number"
                  value={a19}
                  onChange={(e) => setA19(e.target.value)}
                  className="form-control"
                />
              </div>
            </td>
            <td>
              <div className="form-floating">
                <input
                  type="number"
                  value={a20}
                  onChange={(e) => setA20(e.target.value)}
                  className="form-control"
                />
              </div>
            </td>
            <td>
              <div className="form-floating">
                <input
                  type="number"
                  value={a21}
                  onChange={(e) => setA21(e.target.value)}
                  className="form-control"
                />
              </div>
            </td>
            <td>
              <div className="form-floating">
                <input
                  type="number"
                  value={a22}
                  onChange={(e) => setA22(e.target.value)}
                  className="form-control"
                />
              </div>
            </td>
            <td>
              <div className="form-floating">
                <input
                  type="number"
                  value={a23}
                  onChange={(e) => setA23(e.target.value)}
                  className="form-control"
                />
              </div>
            </td>
            <td>
              <div className="form-floating">
                <input
                  type="number"
                  value={a24}
                  onChange={(e) => setA24(e.target.value)}
                  className="form-control"
                />
              </div>
            </td>
            <td>
              <div className="form-floating">
                <input
                  type="number"
                  value={a25}
                  onChange={(e) => setA25(e.target.value)}
                  className="form-control"
                />
              </div>
            </td>
            <td>
              <div className="form-floating">
                <input
                  type="number"
                  value={a26}
                  onChange={(e) => setA26(e.target.value)}
                  className="form-control"
                />
              </div>
            </td>
            <td>
              <div className="form-floating">
                <input
                  type="number"
                  value={a27}
                  onChange={(e) => setA27(e.target.value)}
                  className="form-control"
                />
              </div>
            </td>
            <td>
              <div className="form-floating">
                <input
                  type="number"
                  value={a28}
                  onChange={(e) => setA28(e.target.value)}
                  className="form-control"
                />
              </div>
            </td>
            <td>
              <div className="form-floating">
                <input
                  type="number"
                  value={a29}
                  onChange={(e) => setA29(e.target.value)}
                  className="form-control"
                />
              </div>
            </td>
            <td>
              <div className="form-floating">
                <input
                  type="number"
                  value={a30}
                  onChange={(e) => setA30(e.target.value)}
                  className="form-control"
                />
              </div>
            </td>
            <td>{total_hourly_1}</td>
          </tr>
          <tr>
            <th scope="row" className="bg-primary text-white">
              Basico nocturno (9PM-6AM)
            </th>
            <th scope="row" className="bg-dark text-white">
              135%
            </th>
            <td className="bg-dark text-white">
              {useCoinFormatter.format(Math.floor(valueTimeNocturnalBasic))}{" "}
            </td>
            <td>
              <div className="form-floating">
                <input
                  type="number"
                  value={b1}
                  onChange={(e) => setB1(e.target.value)}
                  className="form-control"
                />
              </div>
            </td>
            <td>
              <div className="form-floating">
                <input
                  type="number"
                  value={b2}
                  onChange={(e) => setB2(e.target.value)}
                  className="form-control"
                />
              </div>
            </td>
            <td>
              <div className="form-floating">
                <input
                  type="number"
                  value={b3}
                  onChange={(e) => setB3(e.target.value)}
                  className="form-control"
                />
              </div>
            </td>
            <td>
              <div className="form-floating">
                <input
                  type="number"
                  value={b4}
                  onChange={(e) => setB4(e.target.value)}
                  className="form-control"
                />
              </div>
            </td>
            <td>
              <div className="form-floating">
                <input
                  type="number"
                  value={b5}
                  onChange={(e) => setB5(e.target.value)}
                  className="form-control"
                />
              </div>
            </td>
            <td>
              <div className="form-floating">
                <input
                  type="number"
                  value={b6}
                  onChange={(e) => setB6(e.target.value)}
                  className="form-control"
                />
              </div>
            </td>
            <td>
              <div className="form-floating">
                <input
                  type="number"
                  value={b7}
                  onChange={(e) => setB7(e.target.value)}
                  className="form-control"
                />
              </div>
            </td>
            <td>
              <div className="form-floating">
                <input
                  type="number"
                  value={b8}
                  onChange={(e) => setB8(e.target.value)}
                  className="form-control"
                />
              </div>
            </td>
            <td>
              <div className="form-floating">
                <input
                  type="number"
                  value={b9}
                  onChange={(e) => setB9(e.target.value)}
                  className="form-control"
                />
              </div>
            </td>
            <td>
              <div className="form-floating">
                <input
                  type="number"
                  value={b10}
                  onChange={(e) => setB10(e.target.value)}
                  className="form-control"
                />
              </div>
            </td>
            <td>
              <div className="form-floating">
                <input
                  type="number"
                  value={b11}
                  onChange={(e) => setB11(e.target.value)}
                  className="form-control"
                />
              </div>
            </td>
            <td>
              <div className="form-floating">
                <input
                  type="number"
                  value={b12}
                  onChange={(e) => setB12(e.target.value)}
                  className="form-control"
                />
              </div>
            </td>
            <td>
              <div className="form-floating">
                <input
                  type="number"
                  value={b13}
                  onChange={(e) => setB13(e.target.value)}
                  className="form-control"
                />
              </div>
            </td>
            <td>
              <div className="form-floating">
                <input
                  type="number"
                  value={b14}
                  onChange={(e) => setB14(e.target.value)}
                  className="form-control"
                />
              </div>
            </td>
            <td>
              <div className="form-floating">
                <input
                  type="number"
                  value={b15}
                  onChange={(e) => setB15(e.target.value)}
                  className="form-control"
                />
              </div>
            </td>
            <td>
              <div className="form-floating">
                <input
                  type="number"
                  value={b16}
                  onChange={(e) => setB16(e.target.value)}
                  className="form-control"
                />
              </div>
            </td>
            <td>
              <div className="form-floating">
                <input
                  type="number"
                  value={b17}
                  onChange={(e) => setB17(e.target.value)}
                  className="form-control"
                />
              </div>
            </td>
            <td>
              <div className="form-floating">
                <input
                  type="number"
                  value={b18}
                  onChange={(e) => setB18(e.target.value)}
                  className="form-control"
                />
              </div>
            </td>
            <td>
              <div className="form-floating">
                <input
                  type="number"
                  value={b19}
                  onChange={(e) => setB19(e.target.value)}
                  className="form-control"
                />
              </div>
            </td>
            <td>
              <div className="form-floating">
                <input
                  type="number"
                  value={b20}
                  onChange={(e) => setB20(e.target.value)}
                  className="form-control"
                />
              </div>
            </td>
            <td>
              <div className="form-floating">
                <input
                  type="number"
                  value={b21}
                  onChange={(e) => setB21(e.target.value)}
                  className="form-control"
                />
              </div>
            </td>
            <td>
              <div className="form-floating">
                <input
                  type="number"
                  value={b22}
                  onChange={(e) => setB22(e.target.value)}
                  className="form-control"
                />
              </div>
            </td>
            <td>
              <div className="form-floating">
                <input
                  type="number"
                  value={b23}
                  onChange={(e) => setB23(e.target.value)}
                  className="form-control"
                />
              </div>
            </td>
            <td>
              <div className="form-floating">
                <input
                  type="number"
                  value={b24}
                  onChange={(e) => setB24(e.target.value)}
                  className="form-control"
                />
              </div>
            </td>
            <td>
              <div className="form-floating">
                <input
                  type="number"
                  value={b25}
                  onChange={(e) => setB25(e.target.value)}
                  className="form-control"
                />
              </div>
            </td>
            <td>
              <div className="form-floating">
                <input
                  type="number"
                  value={b26}
                  onChange={(e) => setB26(e.target.value)}
                  className="form-control"
                />
              </div>
            </td>
            <td>
              <div className="form-floating">
                <input
                  type="number"
                  value={b27}
                  onChange={(e) => setB27(e.target.value)}
                  className="form-control"
                />
              </div>
            </td>
            <td>
              <div className="form-floating">
                <input
                  type="number"
                  value={b28}
                  onChange={(e) => setB28(e.target.value)}
                  className="form-control"
                />
              </div>
            </td>
            <td>
              <div className="form-floating">
                <input
                  type="number"
                  value={b29}
                  onChange={(e) => setB29(e.target.value)}
                  className="form-control"
                />
              </div>
            </td>
            <td>
              <div className="form-floating">
                <input
                  type="number"
                  value={b30}
                  onChange={(e) => setB30(e.target.value)}
                  className="form-control"
                />
              </div>
            </td>
            <td>{total_hourly_2}</td>
          </tr>
          <tr>
            <th scope="row" className="bg-primary text-white">
              Extra diurno
            </th>
            <th scope="row" className="bg-dark text-white">
              125%
            </th>
            <td className="bg-dark text-white">
              {useCoinFormatter.format(Math.floor(valueTimeDiurnalExtra))}{" "}
            </td>
            <td>
              <div className="form-floating">
                <input
                  type="number"
                  value={c1}
                  onChange={(e) => setC1(e.target.value)}
                  className="form-control"
                />
              </div>
            </td>
            <td>
              <div className="form-floating">
                <input
                  type="number"
                  value={c2}
                  onChange={(e) => setC2(e.target.value)}
                  className="form-control"
                />
              </div>
            </td>
            <td>
              <div className="form-floating">
                <input
                  type="number"
                  value={c3}
                  onChange={(e) => setC3(e.target.value)}
                  className="form-control"
                />
              </div>
            </td>
            <td>
              <div className="form-floating">
                <input
                  type="number"
                  value={c4}
                  onChange={(e) => setC4(e.target.value)}
                  className="form-control"
                />
              </div>
            </td>
            <td>
              <div className="form-floating">
                <input
                  type="number"
                  value={c5}
                  onChange={(e) => setC5(e.target.value)}
                  className="form-control"
                />
              </div>
            </td>
            <td>
              <div className="form-floating">
                <input
                  type="number"
                  value={c6}
                  onChange={(e) => setC6(e.target.value)}
                  className="form-control"
                />
              </div>
            </td>
            <td>
              <div className="form-floating">
                <input
                  type="number"
                  value={c7}
                  onChange={(e) => setC7(e.target.value)}
                  className="form-control"
                />
              </div>
            </td>
            <td>
              <div className="form-floating">
                <input
                  type="number"
                  value={c8}
                  onChange={(e) => setC8(e.target.value)}
                  className="form-control"
                />
              </div>
            </td>
            <td>
              <div className="form-floating">
                <input
                  type="number"
                  value={c9}
                  onChange={(e) => setC9(e.target.value)}
                  className="form-control"
                />
              </div>
            </td>
            <td>
              <div className="form-floating">
                <input
                  type="number"
                  value={c10}
                  onChange={(e) => setC10(e.target.value)}
                  className="form-control"
                />
              </div>
            </td>
            <td>
              <div className="form-floating">
                <input
                  type="number"
                  value={c11}
                  onChange={(e) => setC11(e.target.value)}
                  className="form-control"
                />
              </div>
            </td>
            <td>
              <div className="form-floating">
                <input
                  type="number"
                  value={c12}
                  onChange={(e) => setC12(e.target.value)}
                  className="form-control"
                />
              </div>
            </td>
            <td>
              <div className="form-floating">
                <input
                  type="number"
                  value={c13}
                  onChange={(e) => setC13(e.target.value)}
                  className="form-control"
                />
              </div>
            </td>
            <td>
              <div className="form-floating">
                <input
                  type="number"
                  value={c14}
                  onChange={(e) => setC14(e.target.value)}
                  className="form-control"
                />
              </div>
            </td>
            <td>
              <div className="form-floating">
                <input
                  type="number"
                  value={c15}
                  onChange={(e) => setC15(e.target.value)}
                  className="form-control"
                />
              </div>
            </td>
            <td>
              <div className="form-floating">
                <input
                  type="number"
                  value={c16}
                  onChange={(e) => setC16(e.target.value)}
                  className="form-control"
                />
              </div>
            </td>
            <td>
              <div className="form-floating">
                <input
                  type="number"
                  value={c17}
                  onChange={(e) => setC17(e.target.value)}
                  className="form-control"
                />
              </div>
            </td>
            <td>
              <div className="form-floating">
                <input
                  type="number"
                  value={c18}
                  onChange={(e) => setC18(e.target.value)}
                  className="form-control"
                />
              </div>
            </td>
            <td>
              <div className="form-floating">
                <input
                  type="number"
                  value={c19}
                  onChange={(e) => setC19(e.target.value)}
                  className="form-control"
                />
              </div>
            </td>
            <td>
              <div className="form-floating">
                <input
                  type="number"
                  value={c20}
                  onChange={(e) => setC20(e.target.value)}
                  className="form-control"
                />
              </div>
            </td>
            <td>
              <div className="form-floating">
                <input
                  type="number"
                  value={c21}
                  onChange={(e) => setC21(e.target.value)}
                  className="form-control"
                />
              </div>
            </td>
            <td>
              <div className="form-floating">
                <input
                  type="number"
                  value={c22}
                  onChange={(e) => setC22(e.target.value)}
                  className="form-control"
                />
              </div>
            </td>
            <td>
              <div className="form-floating">
                <input
                  type="number"
                  value={c23}
                  onChange={(e) => setC23(e.target.value)}
                  className="form-control"
                />
              </div>
            </td>
            <td>
              <div className="form-floating">
                <input
                  type="number"
                  value={c24}
                  onChange={(e) => setC24(e.target.value)}
                  className="form-control"
                />
              </div>
            </td>
            <td>
              <div className="form-floating">
                <input
                  type="number"
                  value={c25}
                  onChange={(e) => setC25(e.target.value)}
                  className="form-control"
                />
              </div>
            </td>
            <td>
              <div className="form-floating">
                <input
                  type="number"
                  value={c26}
                  onChange={(e) => setC26(e.target.value)}
                  className="form-control"
                />
              </div>
            </td>
            <td>
              <div className="form-floating">
                <input
                  type="number"
                  value={c27}
                  onChange={(e) => setC27(e.target.value)}
                  className="form-control"
                />
              </div>
            </td>
            <td>
              <div className="form-floating">
                <input
                  type="number"
                  value={c28}
                  onChange={(e) => setC28(e.target.value)}
                  className="form-control"
                />
              </div>
            </td>
            <td>
              <div className="form-floating">
                <input
                  type="number"
                  value={c29}
                  onChange={(e) => setC29(e.target.value)}
                  className="form-control"
                />
              </div>
            </td>
            <td>
              <div className="form-floating">
                <input
                  type="number"
                  value={c30}
                  onChange={(e) => setC30(e.target.value)}
                  className="form-control"
                />
              </div>
            </td>
            <td>{total_hourly_3}</td>
          </tr>
          <tr>
            <th scope="row" className="bg-primary text-white">
              Extra nocturno
            </th>
            <th scope="row" className="bg-dark text-white">
              175%
            </th>
            <td className="bg-dark text-white">
              {useCoinFormatter.format(Math.floor(valueTimeNocturnalExtra))}{" "}
            </td>
            <td>
              <div className="form-floating">
                <input
                  type="number"
                  value={d1}
                  onChange={(e) => setD1(e.target.value)}
                  className="form-control"
                />
              </div>
            </td>
            <td>
              <div className="form-floating">
                <input
                  type="number"
                  value={d2}
                  onChange={(e) => setD2(e.target.value)}
                  className="form-control"
                />
              </div>
            </td>
            <td>
              <div className="form-floating">
                <input
                  type="number"
                  value={d3}
                  onChange={(e) => setD3(e.target.value)}
                  className="form-control"
                />
              </div>
            </td>
            <td>
              <div className="form-floating">
                <input
                  type="number"
                  value={d4}
                  onChange={(e) => setD4(e.target.value)}
                  className="form-control"
                />
              </div>
            </td>
            <td>
              <div className="form-floating">
                <input
                  type="number"
                  value={d5}
                  onChange={(e) => setD5(e.target.value)}
                  className="form-control"
                />
              </div>
            </td>
            <td>
              <div className="form-floating">
                <input
                  type="number"
                  value={d6}
                  onChange={(e) => setD6(e.target.value)}
                  className="form-control"
                />
              </div>
            </td>
            <td>
              <div className="form-floating">
                <input
                  type="number"
                  value={d7}
                  onChange={(e) => setD7(e.target.value)}
                  className="form-control"
                />
              </div>
            </td>
            <td>
              <div className="form-floating">
                <input
                  type="number"
                  value={d8}
                  onChange={(e) => setD8(e.target.value)}
                  className="form-control"
                />
              </div>
            </td>
            <td>
              <div className="form-floating">
                <input
                  type="number"
                  value={d9}
                  onChange={(e) => setD9(e.target.value)}
                  className="form-control"
                />
              </div>
            </td>
            <td>
              <div className="form-floating">
                <input
                  type="number"
                  value={d10}
                  onChange={(e) => setD10(e.target.value)}
                  className="form-control"
                />
              </div>
            </td>
            <td>
              <div className="form-floating">
                <input
                  type="number"
                  value={d11}
                  onChange={(e) => setD11(e.target.value)}
                  className="form-control"
                />
              </div>
            </td>
            <td>
              <div className="form-floating">
                <input
                  type="number"
                  value={d12}
                  onChange={(e) => setD12(e.target.value)}
                  className="form-control"
                />
              </div>
            </td>
            <td>
              <div className="form-floating">
                <input
                  type="number"
                  value={d13}
                  onChange={(e) => setD13(e.target.value)}
                  className="form-control"
                />
              </div>
            </td>
            <td>
              <div className="form-floating">
                <input
                  type="number"
                  value={d14}
                  onChange={(e) => setD14(e.target.value)}
                  className="form-control"
                />
              </div>
            </td>
            <td>
              <div className="form-floating">
                <input
                  type="number"
                  value={d15}
                  onChange={(e) => setD15(e.target.value)}
                  className="form-control"
                />
              </div>
            </td>
            <td>
              <div className="form-floating">
                <input
                  type="number"
                  value={d16}
                  onChange={(e) => setD16(e.target.value)}
                  className="form-control"
                />
              </div>
            </td>
            <td>
              <div className="form-floating">
                <input
                  type="number"
                  value={d17}
                  onChange={(e) => setD17(e.target.value)}
                  className="form-control"
                />
              </div>
            </td>
            <td>
              <div className="form-floating">
                <input
                  type="number"
                  value={d18}
                  onChange={(e) => setD18(e.target.value)}
                  className="form-control"
                />
              </div>
            </td>
            <td>
              <div className="form-floating">
                <input
                  type="number"
                  value={d19}
                  onChange={(e) => setD19(e.target.value)}
                  className="form-control"
                />
              </div>
            </td>
            <td>
              <div className="form-floating">
                <input
                  type="number"
                  value={d20}
                  onChange={(e) => setD20(e.target.value)}
                  className="form-control"
                />
              </div>
            </td>
            <td>
              <div className="form-floating">
                <input
                  type="number"
                  value={d21}
                  onChange={(e) => setD21(e.target.value)}
                  className="form-control"
                />
              </div>
            </td>
            <td>
              <div className="form-floating">
                <input
                  type="number"
                  value={d22}
                  onChange={(e) => setD22(e.target.value)}
                  className="form-control"
                />
              </div>
            </td>
            <td>
              <div className="form-floating">
                <input
                  type="number"
                  value={d23}
                  onChange={(e) => setD23(e.target.value)}
                  className="form-control"
                />
              </div>
            </td>
            <td>
              <div className="form-floating">
                <input
                  type="number"
                  value={d24}
                  onChange={(e) => setD24(e.target.value)}
                  className="form-control"
                />
              </div>
            </td>
            <td>
              <div className="form-floating">
                <input
                  type="number"
                  value={d25}
                  onChange={(e) => setD25(e.target.value)}
                  className="form-control"
                />
              </div>
            </td>
            <td>
              <div className="form-floating">
                <input
                  type="number"
                  value={d26}
                  onChange={(e) => setD26(e.target.value)}
                  className="form-control"
                />
              </div>
            </td>
            <td>
              <div className="form-floating">
                <input
                  type="number"
                  value={d27}
                  onChange={(e) => setD27(e.target.value)}
                  className="form-control"
                />
              </div>
            </td>
            <td>
              <div className="form-floating">
                <input
                  type="number"
                  value={d28}
                  onChange={(e) => setD28(e.target.value)}
                  className="form-control"
                />
              </div>
            </td>
            <td>
              <div className="form-floating">
                <input
                  type="number"
                  value={d29}
                  onChange={(e) => setD29(e.target.value)}
                  className="form-control"
                />
              </div>
            </td>
            <td>
              <div className="form-floating">
                <input
                  type="number"
                  value={d30}
                  onChange={(e) => setD30(e.target.value)}
                  className="form-control"
                />
              </div>
            </td>
            <td>{total_hourly_4}</td>
          </tr>
          <tr>
            <th scope="row" className="bg-primary text-white">
              Festivo basico diurno
            </th>
            <th scope="row" className="bg-dark text-white">
              175%
            </th>
            <td className="bg-dark text-white">
              {useCoinFormatter.format(
                Math.floor(valueTimeFestiveDiurnalBasic)
              )}{" "}
            </td>
            <td>
              <div className="form-floating">
                <input
                  type="number"
                  value={e1}
                  onChange={(e) => setE1(e.target.value)}
                  className="form-control"
                />
              </div>
            </td>
            <td>
              <div className="form-floating">
                <input
                  type="number"
                  value={e2}
                  onChange={(e) => setE2(e.target.value)}
                  className="form-control"
                />
              </div>
            </td>
            <td>
              <div className="form-floating">
                <input
                  type="number"
                  value={e3}
                  onChange={(e) => setE3(e.target.value)}
                  className="form-control"
                />
              </div>
            </td>
            <td>
              <div className="form-floating">
                <input
                  type="number"
                  value={e4}
                  onChange={(e) => setE4(e.target.value)}
                  className="form-control"
                />
              </div>
            </td>
            <td>
              <div className="form-floating">
                <input
                  type="number"
                  value={e5}
                  onChange={(e) => setE5(e.target.value)}
                  className="form-control"
                />
              </div>
            </td>
            <td>
              <div className="form-floating">
                <input
                  type="number"
                  value={e6}
                  onChange={(e) => setE6(e.target.value)}
                  className="form-control"
                />
              </div>
            </td>
            <td>
              <div className="form-floating">
                <input
                  type="number"
                  value={e7}
                  onChange={(e) => setE7(e.target.value)}
                  className="form-control"
                />
              </div>
            </td>
            <td>
              <div className="form-floating">
                <input
                  type="number"
                  value={e8}
                  onChange={(e) => setE8(e.target.value)}
                  className="form-control"
                />
              </div>
            </td>
            <td>
              <div className="form-floating">
                <input
                  type="number"
                  value={e9}
                  onChange={(e) => setE9(e.target.value)}
                  className="form-control"
                />
              </div>
            </td>
            <td>
              <div className="form-floating">
                <input
                  type="number"
                  value={e10}
                  onChange={(e) => setE10(e.target.value)}
                  className="form-control"
                />
              </div>
            </td>
            <td>
              <div className="form-floating">
                <input
                  type="number"
                  value={e11}
                  onChange={(e) => setE11(e.target.value)}
                  className="form-control"
                />
              </div>
            </td>
            <td>
              <div className="form-floating">
                <input
                  type="number"
                  value={e12}
                  onChange={(e) => setE12(e.target.value)}
                  className="form-control"
                />
              </div>
            </td>
            <td>
              <div className="form-floating">
                <input
                  type="number"
                  value={e13}
                  onChange={(e) => setE13(e.target.value)}
                  className="form-control"
                />
              </div>
            </td>
            <td>
              <div className="form-floating">
                <input
                  type="number"
                  value={e14}
                  onChange={(e) => setE14(e.target.value)}
                  className="form-control"
                />
              </div>
            </td>
            <td>
              <div className="form-floating">
                <input
                  type="number"
                  value={e15}
                  onChange={(e) => setE15(e.target.value)}
                  className="form-control"
                />
              </div>
            </td>
            <td>
              <div className="form-floating">
                <input
                  type="number"
                  value={e16}
                  onChange={(e) => setE16(e.target.value)}
                  className="form-control"
                />
              </div>
            </td>
            <td>
              <div className="form-floating">
                <input
                  type="number"
                  value={e17}
                  onChange={(e) => setE17(e.target.value)}
                  className="form-control"
                />
              </div>
            </td>
            <td>
              <div className="form-floating">
                <input
                  type="number"
                  value={e18}
                  onChange={(e) => setE18(e.target.value)}
                  className="form-control"
                />
              </div>
            </td>
            <td>
              <div className="form-floating">
                <input
                  type="number"
                  value={e19}
                  onChange={(e) => setE19(e.target.value)}
                  className="form-control"
                />
              </div>
            </td>
            <td>
              <div className="form-floating">
                <input
                  type="number"
                  value={e20}
                  onChange={(e) => setE20(e.target.value)}
                  className="form-control"
                />
              </div>
            </td>
            <td>
              <div className="form-floating">
                <input
                  type="number"
                  value={e21}
                  onChange={(e) => setE21(e.target.value)}
                  className="form-control"
                />
              </div>
            </td>
            <td>
              <div className="form-floating">
                <input
                  type="number"
                  value={e22}
                  onChange={(e) => setE22(e.target.value)}
                  className="form-control"
                />
              </div>
            </td>
            <td>
              <div className="form-floating">
                <input
                  type="number"
                  value={e23}
                  onChange={(e) => setE23(e.target.value)}
                  className="form-control"
                />
              </div>
            </td>
            <td>
              <div className="form-floating">
                <input
                  type="number"
                  value={e24}
                  onChange={(e) => setE24(e.target.value)}
                  className="form-control"
                />
              </div>
            </td>
            <td>
              <div className="form-floating">
                <input
                  type="number"
                  value={e25}
                  onChange={(e) => setE25(e.target.value)}
                  className="form-control"
                />
              </div>
            </td>
            <td>
              <div className="form-floating">
                <input
                  type="number"
                  value={e26}
                  onChange={(e) => setE26(e.target.value)}
                  className="form-control"
                />
              </div>
            </td>
            <td>
              <div className="form-floating">
                <input
                  type="number"
                  value={e27}
                  onChange={(e) => setE27(e.target.value)}
                  className="form-control"
                />
              </div>
            </td>
            <td>
              <div className="form-floating">
                <input
                  type="number"
                  value={e28}
                  onChange={(e) => setE28(e.target.value)}
                  className="form-control"
                />
              </div>
            </td>
            <td>
              <div className="form-floating">
                <input
                  type="number"
                  value={e29}
                  onChange={(e) => setE29(e.target.value)}
                  className="form-control"
                />
              </div>
            </td>
            <td>
              <div className="form-floating">
                <input
                  type="number"
                  value={e30}
                  onChange={(e) => setE30(e.target.value)}
                  className="form-control"
                />
              </div>
            </td>
            <td>{total_hourly_5}</td>
          </tr>
          <tr>
            <th scope="row" className="bg-primary text-white">
              Festivo basico nocturno
            </th>
            <th scope="row" className="bg-dark text-white">
              210%
            </th>
            <td className="bg-dark text-white">
              {useCoinFormatter.format(
                Math.floor(valueTimeFestiveNocturnalBasic)
              )}{" "}
            </td>
            <td>
              <div className="form-floating">
                <input
                  type="number"
                  value={f1}
                  onChange={(e) => setF1(e.target.value)}
                  className="form-control"
                />
              </div>
            </td>
            <td>
              <div className="form-floating">
                <input
                  type="number"
                  value={f2}
                  onChange={(e) => setF2(e.target.value)}
                  className="form-control"
                />
              </div>
            </td>
            <td>
              <div className="form-floating">
                <input
                  type="number"
                  value={f3}
                  onChange={(e) => setF3(e.target.value)}
                  className="form-control"
                />
              </div>
            </td>
            <td>
              <div className="form-floating">
                <input
                  type="number"
                  value={f4}
                  onChange={(e) => setF4(e.target.value)}
                  className="form-control"
                />
              </div>
            </td>
            <td>
              <div className="form-floating">
                <input
                  type="number"
                  value={f5}
                  onChange={(e) => setF5(e.target.value)}
                  className="form-control"
                />
              </div>
            </td>
            <td>
              <div className="form-floating">
                <input
                  type="number"
                  value={f6}
                  onChange={(e) => setF6(e.target.value)}
                  className="form-control"
                />
              </div>
            </td>
            <td>
              <div className="form-floating">
                <input
                  type="number"
                  value={f7}
                  onChange={(e) => setF7(e.target.value)}
                  className="form-control"
                />
              </div>
            </td>
            <td>
              <div className="form-floating">
                <input
                  type="number"
                  value={f8}
                  onChange={(e) => setF8(e.target.value)}
                  className="form-control"
                />
              </div>
            </td>
            <td>
              <div className="form-floating">
                <input
                  type="number"
                  value={f9}
                  onChange={(e) => setF9(e.target.value)}
                  className="form-control"
                />
              </div>
            </td>
            <td>
              <div className="form-floating">
                <input
                  type="number"
                  value={f10}
                  onChange={(e) => setF10(e.target.value)}
                  className="form-control"
                />
              </div>
            </td>
            <td>
              <div className="form-floating">
                <input
                  type="number"
                  value={f11}
                  onChange={(e) => setF11(e.target.value)}
                  className="form-control"
                />
              </div>
            </td>
            <td>
              <div className="form-floating">
                <input
                  type="number"
                  value={f12}
                  onChange={(e) => setF12(e.target.value)}
                  className="form-control"
                />
              </div>
            </td>
            <td>
              <div className="form-floating">
                <input
                  type="number"
                  value={f13}
                  onChange={(e) => setF13(e.target.value)}
                  className="form-control"
                />
              </div>
            </td>
            <td>
              <div className="form-floating">
                <input
                  type="number"
                  value={f14}
                  onChange={(e) => setF14(e.target.value)}
                  className="form-control"
                />
              </div>
            </td>
            <td>
              <div className="form-floating">
                <input
                  type="number"
                  value={f15}
                  onChange={(e) => setF15(e.target.value)}
                  className="form-control"
                />
              </div>
            </td>
            <td>
              <div className="form-floating">
                <input
                  type="number"
                  value={f16}
                  onChange={(e) => setF16(e.target.value)}
                  className="form-control"
                />
              </div>
            </td>
            <td>
              <div className="form-floating">
                <input
                  type="number"
                  value={f17}
                  onChange={(e) => setF17(e.target.value)}
                  className="form-control"
                />
              </div>
            </td>
            <td>
              <div className="form-floating">
                <input
                  type="number"
                  value={f18}
                  onChange={(e) => setF18(e.target.value)}
                  className="form-control"
                />
              </div>
            </td>
            <td>
              <div className="form-floating">
                <input
                  type="number"
                  value={f19}
                  onChange={(e) => setF19(e.target.value)}
                  className="form-control"
                />
              </div>
            </td>
            <td>
              <div className="form-floating">
                <input
                  type="number"
                  value={f20}
                  onChange={(e) => setF20(e.target.value)}
                  className="form-control"
                />
              </div>
            </td>
            <td>
              <div className="form-floating">
                <input
                  type="number"
                  value={f21}
                  onChange={(e) => setF21(e.target.value)}
                  className="form-control"
                />
              </div>
            </td>
            <td>
              <div className="form-floating">
                <input
                  type="number"
                  value={f22}
                  onChange={(e) => setF22(e.target.value)}
                  className="form-control"
                />
              </div>
            </td>
            <td>
              <div className="form-floating">
                <input
                  type="number"
                  value={f23}
                  onChange={(e) => setF23(e.target.value)}
                  className="form-control"
                />
              </div>
            </td>
            <td>
              <div className="form-floating">
                <input
                  type="number"
                  value={f24}
                  onChange={(e) => setF24(e.target.value)}
                  className="form-control"
                />
              </div>
            </td>
            <td>
              <div className="form-floating">
                <input
                  type="number"
                  value={f25}
                  onChange={(e) => setF25(e.target.value)}
                  className="form-control"
                />
              </div>
            </td>
            <td>
              <div className="form-floating">
                <input
                  type="number"
                  value={f26}
                  onChange={(e) => setF26(e.target.value)}
                  className="form-control"
                />
              </div>
            </td>
            <td>
              <div className="form-floating">
                <input
                  type="number"
                  value={f27}
                  onChange={(e) => setF27(e.target.value)}
                  className="form-control"
                />
              </div>
            </td>
            <td>
              <div className="form-floating">
                <input
                  type="number"
                  value={f28}
                  onChange={(e) => setF28(e.target.value)}
                  className="form-control"
                />
              </div>
            </td>
            <td>
              <div className="form-floating">
                <input
                  type="number"
                  value={f29}
                  onChange={(e) => setF29(e.target.value)}
                  className="form-control"
                />
              </div>
            </td>
            <td>
              <div className="form-floating">
                <input
                  type="number"
                  value={f30}
                  onChange={(e) => setF30(e.target.value)}
                  className="form-control"
                />
              </div>
            </td>
            <td>{total_hourly_6}</td>
          </tr>
          <tr>
            <th scope="row" className="bg-primary text-white">
              Festivo extra diurno
            </th>
            <th scope="row" className="bg-dark text-white">
              200%
            </th>
            <td className="bg-dark text-white">
              {useCoinFormatter.format(
                Math.floor(valueTimeFestiveDiurnalExtra)
              )}{" "}
            </td>
            <td>
              <div className="form-floating">
                <input
                  type="number"
                  value={g1}
                  onChange={(e) => setG1(e.target.value)}
                  className="form-control"
                />
              </div>
            </td>
            <td>
              <div className="form-floating">
                <input
                  type="number"
                  value={g2}
                  onChange={(e) => setG2(e.target.value)}
                  className="form-control"
                />
              </div>
            </td>
            <td>
              <div className="form-floating">
                <input
                  type="number"
                  value={g3}
                  onChange={(e) => setG3(e.target.value)}
                  className="form-control"
                />
              </div>
            </td>
            <td>
              <div className="form-floating">
                <input
                  type="number"
                  value={g4}
                  onChange={(e) => setG4(e.target.value)}
                  className="form-control"
                />
              </div>
            </td>
            <td>
              <div className="form-floating">
                <input
                  type="number"
                  value={g5}
                  onChange={(e) => setG5(e.target.value)}
                  className="form-control"
                />
              </div>
            </td>
            <td>
              <div className="form-floating">
                <input
                  type="number"
                  value={g6}
                  onChange={(e) => setG6(e.target.value)}
                  className="form-control"
                />
              </div>
            </td>
            <td>
              <div className="form-floating">
                <input
                  type="number"
                  value={g7}
                  onChange={(e) => setG7(e.target.value)}
                  className="form-control"
                />
              </div>
            </td>
            <td>
              <div className="form-floating">
                <input
                  type="number"
                  value={g8}
                  onChange={(e) => setG8(e.target.value)}
                  className="form-control"
                />
              </div>
            </td>
            <td>
              <div className="form-floating">
                <input
                  type="number"
                  value={g9}
                  onChange={(e) => setG9(e.target.value)}
                  className="form-control"
                />
              </div>
            </td>
            <td>
              <div className="form-floating">
                <input
                  type="number"
                  value={g10}
                  onChange={(e) => setG10(e.target.value)}
                  className="form-control"
                />
              </div>
            </td>
            <td>
              <div className="form-floating">
                <input
                  type="number"
                  value={g11}
                  onChange={(e) => setG11(e.target.value)}
                  className="form-control"
                />
              </div>
            </td>
            <td>
              <div className="form-floating">
                <input
                  type="number"
                  value={g12}
                  onChange={(e) => setG12(e.target.value)}
                  className="form-control"
                />
              </div>
            </td>
            <td>
              <div className="form-floating">
                <input
                  type="number"
                  value={g13}
                  onChange={(e) => setG13(e.target.value)}
                  className="form-control"
                />
              </div>
            </td>
            <td>
              <div className="form-floating">
                <input
                  type="number"
                  value={g14}
                  onChange={(e) => setG14(e.target.value)}
                  className="form-control"
                />
              </div>
            </td>
            <td>
              <div className="form-floating">
                <input
                  type="number"
                  value={g15}
                  onChange={(e) => setG15(e.target.value)}
                  className="form-control"
                />
              </div>
            </td>
            <td>
              <div className="form-floating">
                <input
                  type="number"
                  value={g16}
                  onChange={(e) => setG16(e.target.value)}
                  className="form-control"
                />
              </div>
            </td>
            <td>
              <div className="form-floating">
                <input
                  type="number"
                  value={g17}
                  onChange={(e) => setG17(e.target.value)}
                  className="form-control"
                />
              </div>
            </td>
            <td>
              <div className="form-floating">
                <input
                  type="number"
                  value={g18}
                  onChange={(e) => setG18(e.target.value)}
                  className="form-control"
                />
              </div>
            </td>
            <td>
              <div className="form-floating">
                <input
                  type="number"
                  value={g19}
                  onChange={(e) => setG19(e.target.value)}
                  className="form-control"
                />
              </div>
            </td>
            <td>
              <div className="form-floating">
                <input
                  type="number"
                  value={g20}
                  onChange={(e) => setG20(e.target.value)}
                  className="form-control"
                />
              </div>
            </td>
            <td>
              <div className="form-floating">
                <input
                  type="number"
                  value={g21}
                  onChange={(e) => setG21(e.target.value)}
                  className="form-control"
                />
              </div>
            </td>
            <td>
              <div className="form-floating">
                <input
                  type="number"
                  value={g22}
                  onChange={(e) => setG22(e.target.value)}
                  className="form-control"
                />
              </div>
            </td>
            <td>
              <div className="form-floating">
                <input
                  type="number"
                  value={g23}
                  onChange={(e) => setG23(e.target.value)}
                  className="form-control"
                />
              </div>
            </td>
            <td>
              <div className="form-floating">
                <input
                  type="number"
                  value={g24}
                  onChange={(e) => setG24(e.target.value)}
                  className="form-control"
                />
              </div>
            </td>
            <td>
              <div className="form-floating">
                <input
                  type="number"
                  value={g25}
                  onChange={(e) => setG25(e.target.value)}
                  className="form-control"
                />
              </div>
            </td>
            <td>
              <div className="form-floating">
                <input
                  type="number"
                  value={g26}
                  onChange={(e) => setG26(e.target.value)}
                  className="form-control"
                />
              </div>
            </td>
            <td>
              <div className="form-floating">
                <input
                  type="number"
                  value={g27}
                  onChange={(e) => setG27(e.target.value)}
                  className="form-control"
                />
              </div>
            </td>
            <td>
              <div className="form-floating">
                <input
                  type="number"
                  value={g28}
                  onChange={(e) => setG28(e.target.value)}
                  className="form-control"
                />
              </div>
            </td>
            <td>
              <div className="form-floating">
                <input
                  type="number"
                  value={g29}
                  onChange={(e) => setG29(e.target.value)}
                  className="form-control"
                />
              </div>
            </td>
            <td>
              <div className="form-floating">
                <input
                  type="number"
                  value={g30}
                  onChange={(e) => setG30(e.target.value)}
                  className="form-control"
                />
              </div>
            </td>
            <td>{total_hourly_7}</td>
          </tr>
          <tr>
            <th scope="row" className="bg-primary text-white">
              Festivo extra nocturno
            </th>
            <th scope="row" className="bg-dark text-white">
              250%
            </th>
            <td className="bg-dark text-white">
              {useCoinFormatter.format(
                Math.floor(valueTimeFestiveNocturnalExtra)
              )}{" "}
            </td>
            <td>
              <div className="form-floating">
                <input
                  type="number"
                  value={h1}
                  onChange={(e) => setH1(e.target.value)}
                  className="form-control"
                />
              </div>
            </td>
            <td>
              <div className="form-floating">
                <input
                  type="number"
                  value={h2}
                  onChange={(e) => setH2(e.target.value)}
                  className="form-control"
                />
              </div>
            </td>
            <td>
              <div className="form-floating">
                <input
                  type="number"
                  value={h3}
                  onChange={(e) => setH3(e.target.value)}
                  className="form-control"
                />
              </div>
            </td>
            <td>
              <div className="form-floating">
                <input
                  type="number"
                  value={h4}
                  onChange={(e) => setH4(e.target.value)}
                  className="form-control"
                />
              </div>
            </td>
            <td>
              <div className="form-floating">
                <input
                  type="number"
                  value={h5}
                  onChange={(e) => setH5(e.target.value)}
                  className="form-control"
                />
              </div>
            </td>
            <td>
              <div className="form-floating">
                <input
                  type="number"
                  value={h6}
                  onChange={(e) => setH6(e.target.value)}
                  className="form-control"
                />
              </div>
            </td>
            <td>
              <div className="form-floating">
                <input
                  type="number"
                  value={h7}
                  onChange={(e) => setH7(e.target.value)}
                  className="form-control"
                />
              </div>
            </td>
            <td>
              <div className="form-floating">
                <input
                  type="number"
                  value={h8}
                  onChange={(e) => setH8(e.target.value)}
                  className="form-control"
                />
              </div>
            </td>
            <td>
              <div className="form-floating">
                <input
                  type="number"
                  value={h9}
                  onChange={(e) => setH9(e.target.value)}
                  className="form-control"
                />
              </div>
            </td>
            <td>
              <div className="form-floating">
                <input
                  type="number"
                  value={h10}
                  onChange={(e) => setH10(e.target.value)}
                  className="form-control"
                />
              </div>
            </td>
            <td>
              <div className="form-floating">
                <input
                  type="number"
                  value={h11}
                  onChange={(e) => setH11(e.target.value)}
                  className="form-control"
                />
              </div>
            </td>
            <td>
              <div className="form-floating">
                <input
                  type="number"
                  value={h12}
                  onChange={(e) => setH12(e.target.value)}
                  className="form-control"
                />
              </div>
            </td>
            <td>
              <div className="form-floating">
                <input
                  type="number"
                  value={h13}
                  onChange={(e) => setH13(e.target.value)}
                  className="form-control"
                />
              </div>
            </td>
            <td>
              <div className="form-floating">
                <input
                  type="number"
                  value={h14}
                  onChange={(e) => setH14(e.target.value)}
                  className="form-control"
                />
              </div>
            </td>
            <td>
              <div className="form-floating">
                <input
                  type="number"
                  value={h15}
                  onChange={(e) => setH15(e.target.value)}
                  className="form-control"
                />
              </div>
            </td>
            <td>
              <div className="form-floating">
                <input
                  type="number"
                  value={h16}
                  onChange={(e) => setH16(e.target.value)}
                  className="form-control"
                />
              </div>
            </td>
            <td>
              <div className="form-floating">
                <input
                  type="number"
                  value={h17}
                  onChange={(e) => setH17(e.target.value)}
                  className="form-control"
                />
              </div>
            </td>
            <td>
              <div className="form-floating">
                <input
                  type="number"
                  value={h18}
                  onChange={(e) => setH18(e.target.value)}
                  className="form-control"
                />
              </div>
            </td>
            <td>
              <div className="form-floating">
                <input
                  type="number"
                  value={h19}
                  onChange={(e) => setH19(e.target.value)}
                  className="form-control"
                />
              </div>
            </td>
            <td>
              <div className="form-floating">
                <input
                  type="number"
                  value={h20}
                  onChange={(e) => setH20(e.target.value)}
                  className="form-control"
                />
              </div>
            </td>
            <td>
              <div className="form-floating">
                <input
                  type="number"
                  value={h21}
                  onChange={(e) => setH21(e.target.value)}
                  className="form-control"
                />
              </div>
            </td>
            <td>
              <div className="form-floating">
                <input
                  type="number"
                  value={h22}
                  onChange={(e) => setH22(e.target.value)}
                  className="form-control"
                />
              </div>
            </td>
            <td>
              <div className="form-floating">
                <input
                  type="number"
                  value={h23}
                  onChange={(e) => setH23(e.target.value)}
                  className="form-control"
                />
              </div>
            </td>
            <td>
              <div className="form-floating">
                <input
                  type="number"
                  value={h24}
                  onChange={(e) => setH24(e.target.value)}
                  className="form-control"
                />
              </div>
            </td>
            <td>
              <div className="form-floating">
                <input
                  type="number"
                  value={h25}
                  onChange={(e) => setH25(e.target.value)}
                  className="form-control"
                />
              </div>
            </td>
            <td>
              <div className="form-floating">
                <input
                  type="number"
                  value={h26}
                  onChange={(e) => setH26(e.target.value)}
                  className="form-control"
                />
              </div>
            </td>
            <td>
              <div className="form-floating">
                <input
                  type="number"
                  value={h27}
                  onChange={(e) => setH27(e.target.value)}
                  className="form-control"
                />
              </div>
            </td>
            <td>
              <div className="form-floating">
                <input
                  type="number"
                  value={h28}
                  onChange={(e) => setH28(e.target.value)}
                  className="form-control"
                />
              </div>
            </td>
            <td>
              <div className="form-floating">
                <input
                  type="number"
                  value={h29}
                  onChange={(e) => setH29(e.target.value)}
                  className="form-control"
                />
              </div>
            </td>
            <td>
              <div className="form-floating">
                <input
                  type="number"
                  value={h30}
                  onChange={(e) => setH30(e.target.value)}
                  className="form-control"
                />
              </div>
            </td>
            <td>{total_hourly_8}</td>
          </tr>
          <tr>
            <th scope="row" className="bg-primary text-white">
              Compensatorio
            </th>
            <th scope="row" className="bg-dark text-white">
              75%
            </th>
            <td className="bg-dark text-white">
              {useCoinFormatter.format(Math.floor(valueTimeCompensatory))}{" "}
            </td>
            <td>
              <div className="form-floating">
                <input
                  type="number"
                  value={i1}
                  onChange={(e) => setI1(e.target.value)}
                  className="form-control"
                />
              </div>
            </td>
            <td>
              <div className="form-floating">
                <input
                  type="number"
                  value={i2}
                  onChange={(e) => setI2(e.target.value)}
                  className="form-control"
                />
              </div>
            </td>
            <td>
              <div className="form-floating">
                <input
                  type="number"
                  value={i3}
                  onChange={(e) => setI3(e.target.value)}
                  className="form-control"
                />
              </div>
            </td>
            <td>
              <div className="form-floating">
                <input
                  type="number"
                  value={i4}
                  onChange={(e) => setI4(e.target.value)}
                  className="form-control"
                />
              </div>
            </td>
            <td>
              <div className="form-floating">
                <input
                  type="number"
                  value={i5}
                  onChange={(e) => setI5(e.target.value)}
                  className="form-control"
                />
              </div>
            </td>
            <td>
              <div className="form-floating">
                <input
                  type="number"
                  value={i6}
                  onChange={(e) => setI6(e.target.value)}
                  className="form-control"
                />
              </div>
            </td>
            <td>
              <div className="form-floating">
                <input
                  type="number"
                  value={i7}
                  onChange={(e) => setI7(e.target.value)}
                  className="form-control"
                />
              </div>
            </td>
            <td>
              <div className="form-floating">
                <input
                  type="number"
                  value={i8}
                  onChange={(e) => setI8(e.target.value)}
                  className="form-control"
                />
              </div>
            </td>
            <td>
              <div className="form-floating">
                <input
                  type="number"
                  value={i9}
                  onChange={(e) => setI9(e.target.value)}
                  className="form-control"
                />
              </div>
            </td>
            <td>
              <div className="form-floating">
                <input
                  type="number"
                  value={i10}
                  onChange={(e) => setI10(e.target.value)}
                  className="form-control"
                />
              </div>
            </td>
            <td>
              <div className="form-floating">
                <input
                  type="number"
                  value={i11}
                  onChange={(e) => setI11(e.target.value)}
                  className="form-control"
                />
              </div>
            </td>
            <td>
              <div className="form-floating">
                <input
                  type="number"
                  value={i12}
                  onChange={(e) => setI12(e.target.value)}
                  className="form-control"
                />
              </div>
            </td>
            <td>
              <div className="form-floating">
                <input
                  type="number"
                  value={i13}
                  onChange={(e) => setI13(e.target.value)}
                  className="form-control"
                />
              </div>
            </td>
            <td>
              <div className="form-floating">
                <input
                  type="number"
                  value={i14}
                  onChange={(e) => setI14(e.target.value)}
                  className="form-control"
                />
              </div>
            </td>
            <td>
              <div className="form-floating">
                <input
                  type="number"
                  value={i15}
                  onChange={(e) => setI15(e.target.value)}
                  className="form-control"
                />
              </div>
            </td>
            <td>
              <div className="form-floating">
                <input
                  type="number"
                  value={i16}
                  onChange={(e) => setI16(e.target.value)}
                  className="form-control"
                />
              </div>
            </td>
            <td>
              <div className="form-floating">
                <input
                  type="number"
                  value={i17}
                  onChange={(e) => setI17(e.target.value)}
                  className="form-control"
                />
              </div>
            </td>
            <td>
              <div className="form-floating">
                <input
                  type="number"
                  value={i18}
                  onChange={(e) => setI18(e.target.value)}
                  className="form-control"
                />
              </div>
            </td>
            <td>
              <div className="form-floating">
                <input
                  type="number"
                  value={i19}
                  onChange={(e) => setI19(e.target.value)}
                  className="form-control"
                />
              </div>
            </td>
            <td>
              <div className="form-floating">
                <input
                  type="number"
                  value={i20}
                  onChange={(e) => setI20(e.target.value)}
                  className="form-control"
                />
              </div>
            </td>
            <td>
              <div className="form-floating">
                <input
                  type="number"
                  value={i21}
                  onChange={(e) => setI21(e.target.value)}
                  className="form-control"
                />
              </div>
            </td>
            <td>
              <div className="form-floating">
                <input
                  type="number"
                  value={i22}
                  onChange={(e) => setI22(e.target.value)}
                  className="form-control"
                />
              </div>
            </td>
            <td>
              <div className="form-floating">
                <input
                  type="number"
                  value={i23}
                  onChange={(e) => setI23(e.target.value)}
                  className="form-control"
                />
              </div>
            </td>
            <td>
              <div className="form-floating">
                <input
                  type="number"
                  value={i24}
                  onChange={(e) => setI24(e.target.value)}
                  className="form-control"
                />
              </div>
            </td>
            <td>
              <div className="form-floating">
                <input
                  type="number"
                  value={i25}
                  onChange={(e) => setI25(e.target.value)}
                  className="form-control"
                />
              </div>
            </td>
            <td>
              <div className="form-floating">
                <input
                  type="number"
                  value={i26}
                  onChange={(e) => setI26(e.target.value)}
                  className="form-control"
                />
              </div>
            </td>
            <td>
              <div className="form-floating">
                <input
                  type="number"
                  value={i27}
                  onChange={(e) => setI27(e.target.value)}
                  className="form-control"
                />
              </div>
            </td>
            <td>
              <div className="form-floating">
                <input
                  type="number"
                  value={i28}
                  onChange={(e) => setI28(e.target.value)}
                  className="form-control"
                />
              </div>
            </td>
            <td>
              <div className="form-floating">
                <input
                  type="number"
                  value={i29}
                  onChange={(e) => setI29(e.target.value)}
                  className="form-control"
                />
              </div>
            </td>
            <td>
              <div className="form-floating">
                <input
                  type="number"
                  value={i30}
                  onChange={(e) => setI30(e.target.value)}
                  className="form-control"
                />
              </div>
            </td>
            <td>{total_hourly_9}</td>
          </tr>
          <tr className="border-warning">
            <th scope="row" colSpan="3" className="bg-dark text-white">
              Horas X dia
            </th>
            <td>{total_1}</td>
            <td>{total_2}</td>
            <td>{total_3}</td>
            <td>{total_4}</td>
            <td>{total_5}</td>
            <td>{total_6}</td>
            <td>{total_7}</td>
            <td>{total_8}</td>
            <td>{total_9}</td>
            <td>{total_10}</td>
            <td>{total_11}</td>
            <td>{total_12}</td>
            <td>{total_13}</td>
            <td>{total_14}</td>
            <td>{total_15}</td>
            <td>{total_16}</td>
            <td>{total_17}</td>
            <td>{total_18}</td>
            <td>{total_19}</td>
            <td>{total_20}</td>
            <td>{total_21}</td>
            <td>{total_22}</td>
            <td>{total_23}</td>
            <td>{total_24}</td>
            <td>{total_25}</td>
            <td>{total_26}</td>
            <td>{total_27}</td>
            <td>{total_28}</td>
            <td>{total_29}</td>
            <td>{total_30}</td>
            <td rowSpan="2">
              {total_hourly_1 +
                total_hourly_2 +
                total_hourly_3 +
                total_hourly_4 +
                total_hourly_5 +
                total_hourly_6 +
                total_hourly_7 +
                total_hourly_8 +
                total_hourly_9}
            </td>
          </tr>
          <tr className="border-warning">
            <th scope="row" colSpan="3" className="bg-dark text-white">
              Valor dia
            </th>
            <td>{total_day_1}</td>
            <td> {total_day_2} </td>
            <td> {total_day_3} </td>
            <td> {total_day_4} </td>
            <td> {total_day_5} </td>
            <td> {total_day_6} </td>
            <td> {total_day_7} </td>
            <td> {total_day_8} </td>
            <td> {total_day_9} </td>
            <td> {total_day_10} </td>
            <td> {total_day_11} </td>
            <td> {total_day_12} </td>
            <td> {total_day_13} </td>
            <td> {total_day_14} </td>
            <td> {total_day_15} </td>
            <td> {total_day_16} </td>
            <td> {total_day_17} </td>
            <td> {total_day_18} </td>
            <td> {total_day_19} </td>
            <td> {total_day_20} </td>
            <td> {total_day_21} </td>
            <td> {total_day_22} </td>
            <td> {total_day_23} </td>
            <td> {total_day_24} </td>
            <td> {total_day_25} </td>
            <td> {total_day_26} </td>
            <td> {total_day_27} </td>
            <td> {total_day_28} </td>
            <td> {total_day_29} </td>
            <td> {total_day_30} </td>
          </tr>
        </tbody>
      </table>
      <ModalInformation
        idModal={"modalInformation"}
        className={"modal fade"}
        tabIndex={"-1"}
        aria-labelledby={"exampleModalLabel"}
        aria-hidden={"true"}
        information={information}
      />
    </div>
  );
};
