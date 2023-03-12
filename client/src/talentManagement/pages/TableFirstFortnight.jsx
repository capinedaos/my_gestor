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

export const TableFirstFortnight = () => {
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
    Number(a15);

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
    Number(b15);

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
    Number(c15);

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
    Number(d15);

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
    Number(e15);

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
    Number(f15);

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
    Number(g15);

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
    Number(h15);

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
    Number(i15);

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

            <td>{total_hourly_6}</td>
          </tr>
          <tr>
            <th scope="row" className="bg-primary text-white">
              Festivo extra diurno
            </th>
            <th scope="row" className="bg-dark text-white">
              100%
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

            <td>{total_hourly_7}</td>
          </tr>
          <tr>
            <th scope="row" className="bg-primary text-white">
              Festivo extra nocturno
            </th>
            <th scope="row" className="bg-dark text-white">
              150%
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
