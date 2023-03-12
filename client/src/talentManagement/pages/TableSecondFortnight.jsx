import React, { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";
import { useNavigate } from "react-router-dom";
import { ModalInformation } from "../components";
import { ButtonReturn } from "../../components";
import {
  getEmployeePayrollByIdThunk,
  updateEmployeePayrollByIdThunk,
} from "../../app/slicesTalentManagement/employeePayroll.slice";
import { useCoinFormatter } from "../../hooks";
import "../assets/styles/AddNewsPayroll.css";

export const TableSecondFortnight = () => {
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
