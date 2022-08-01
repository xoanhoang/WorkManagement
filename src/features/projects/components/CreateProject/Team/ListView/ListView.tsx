import React from "react";
import styled from "styled-components";
import AddCircleOutlineOutlinedIcon from "@mui/icons-material/AddCircleOutlineOutlined";
import { Avatar } from "@mui/material";
import { IUser } from "../../../../../../api/project/type";
import { useDispatch, useSelector } from "react-redux";
import { pushMember } from "../../../../../../redux/reducer/project/projectReducer";
import { RootState } from "../../../../../../redux/reducer/store";

const Main = styled.div`
  display: flex;
  flex-direction: row;
  gap: 20px;
  align-items: center;
  height: 60px;
`;
const ViewItem = styled.div`
  display: flex;
  flex-direction: row;
  align-items: center;
`;
const TextName = styled.div`
  margin-right: 10px;
  margin-left: 5px;
  font-size: 15px;
  font-weight: 400;
`;
const StyledBranchOne = styled.div`
  font-weight: 600;
  background: #f44336;
  color: #fff;
  font-size: 10px;
  padding: 2px 5px;
  border-radius: 10px;
`;

const StyledBranchTwo = styled.div`
  font-weight: 600;
  background: #4caf50;
  color: #fff;
  font-size: 10px;
  padding: 2px 5px;
  border-radius: 10px;
`;

const StyledBranchThree = styled.div`
  padding: 2px 5px;
  font-size: 10px;
  border-radius: 10px;
  background: #2196f3;
  color: #fff;
  font-weight: 600;
`;

const StyledBranchFour = styled.div`
  font-weight: 600;
  background: #ff9800;
  color: #fff;
  font-size: 10px;
  padding: 2px 5px;
  border-radius: 10px;
`;
const StyledLevelIntern0 = styled.div`
  font-weight: 600;
  background-color: rgb(178, 190, 181);
  color: #fff;
  font-size: 10px;
  padding: 2px 5px;
  border-radius: 10px;
`;
const StyledLevelIntern1 = styled.div`
  font-weight: 600;
  background-color: rgb(143, 151, 121);
  color: #fff;
  font-size: 10px;
  padding: 2px 5px;
  border-radius: 10px;
`;
const StyledLevelIntern2 = styled.div`
  font-weight: 600;
  background-color: rgb(102, 93, 30);
  color: #fff;
  font-size: 10px;
  padding: 2px 5px;
  border-radius: 10px;
`;
const StyledLevelPrefresher0 = styled.div`
  font-weight: 600;
  background-color: rgb(119, 119, 119);
  color: #fff;
  font-size: 10px;
  padding: 2px 5px;
  border-radius: 10px;
`;
const StyledLevelFresher1 = styled.div`
  font-weight: 600;
  background-color: rgb(33, 150, 243);
  color: #fff;
  font-size: 10px;
  padding: 2px 5px;
  border-radius: 10px;
`;
const StyledLevelFresher2 = styled.div`
  font-weight: 600;
  background-color: rgb(137, 207, 240);
  color: #fff;
  font-size: 10px;
  padding: 2px 5px;
  border-radius: 10px;
`;
const StyledLevelFresher3 = styled.div`
  font-weight: 600;
  background-color: rgb(49, 140, 231);
  color: #fff;
  font-size: 10px;
  padding: 2px 5px;
  border-radius: 10px;
`;
const StyledLevelJunior0 = styled.div`
  font-weight: 600;
  background-color: rgb(191, 175, 178);
  color: #fff;
  font-size: 10px;
  padding: 2px 5px;
  border-radius: 10px;
`;
const StyledLevelJunior1 = styled.div`
  font-weight: 600;
  background-color: rgb(165, 113, 100);
  color: #fff;
  font-size: 10px;
  padding: 2px 5px;
  border-radius: 10px;
`;
const StyledLevelJunior2 = styled.div`
  font-weight: 600;
  background-color: rgb(59, 47, 47);
  color: #fff;
  font-size: 10px;
  padding: 2px 5px;
  border-radius: 10px;
`;
const StyledLevelMiddle0 = styled.div`
  font-weight: 600;
  background-color: rgb(164, 198, 57);
  color: #fff;
  font-size: 10px;
  padding: 2px 5px;
  border-radius: 10px;
`;
const StyledLevelMiddle1 = styled.div`
  font-weight: 600;
  background-color: rgb(141, 182, 0);
  color: #fff;
  font-size: 10px;
  padding: 2px 5px;
  border-radius: 10px;
`;
const StyledLevelMiddle2 = styled.div`
  font-weight: 600;
  background-color: rgb(0, 128, 0);
  color: #fff;
  font-size: 10px;
  padding: 2px 5px;
  border-radius: 10px;
`;
const StyledLevelSenior0 = styled.div`
  font-weight: 600;
  background-color: rgb(241, 156, 187);
  color: #fff;
  font-size: 10px;
  padding: 2px 5px;
  border-radius: 10px;
`;
const StyledLevelSenior1 = styled.div`
  font-weight: 600;
  background-color: rgb(171, 39, 79);
  color: #fff;
  font-size: 10px;
  padding: 2px 5px;
  border-radius: 10px;
`;
const StyledLevelSenior2 = styled.div`
  font-weight: 600;
  background-color: rgb(229, 43, 80);
  color: #fff;
  font-size: 10px;
  padding: 2px 5px;
  border-radius: 10px;
`;

const ListView: React.FC<{ user: IUser }> = ({ user }) => {
  const dispatch = useDispatch();
  const handlePushMember = (user: IUser) => {
    dispatch(pushMember(user));
  };


  return (
    <Main>
      <AddCircleOutlineOutlinedIcon onClick={() => handlePushMember(user)} />
      <ViewItem>
        <Avatar
          src={`http://dev.timesheetapi.nccsoft.vn/${user.avatarPath}`}
          sx={{ width: 56, height: 56 }}
        />
        <TextName>{user.name}</TextName>
        {user.branch === 0 ? (
          <StyledBranchOne>HN</StyledBranchOne>
        ) : user.branch === 1 ? (
          <StyledBranchTwo>ĐN</StyledBranchTwo>
        ) : user.branch === 2 ? (
          <StyledBranchThree>HCM</StyledBranchThree>
        ) : (
          <StyledBranchFour>Vinh</StyledBranchFour>
        )}
        {user.type === 0 ? (
          <StyledBranchOne>Staff</StyledBranchOne>
        ) : user.type === 1 ? (
          <StyledBranchTwo>Internship</StyledBranchTwo>
        ) : user.type === 2 ? (
          <StyledBranchThree>Collaborator</StyledBranchThree>
        ) : null}
        {user.level === 0 ? (
          <StyledLevelIntern0>Intern_0</StyledLevelIntern0>
        ) : user.level === 1 ? (
          <StyledLevelIntern1>Intern_1</StyledLevelIntern1>
        ) : user.level === 2 ? (
          <StyledLevelIntern2>Intern_2</StyledLevelIntern2>
        ) : user.level === 3 ? (
          <StyledLevelPrefresher0>Prefresher</StyledLevelPrefresher0>
        ) : user.level === 4 ? (
          <StyledLevelFresher1>Fresher-</StyledLevelFresher1>
        ) : user.level === 5 ? (
          <StyledLevelFresher2>Fresher+</StyledLevelFresher2>
        ) : user.level === 6 ? (
          <StyledLevelFresher3>Fresher+</StyledLevelFresher3>
        ) : user.level === 7 ? (
          <StyledLevelJunior0>Junior-</StyledLevelJunior0>
        ) : user.level === 8 ? (
          <StyledLevelJunior1>Junior</StyledLevelJunior1>
        ) : user.level === 9 ? (
          <StyledLevelJunior2>Junior+</StyledLevelJunior2>
        ) : user.level === 10 ? (
          <StyledLevelMiddle0>Middle-</StyledLevelMiddle0>
        ) : user.level === 11 ? (
          <StyledLevelMiddle1>Middle</StyledLevelMiddle1>
        ) : user.level === 12 ? (
          <StyledLevelMiddle2>Middle+</StyledLevelMiddle2>
        ) : user.level === 13 ? (
          <StyledLevelSenior0>Senior-</StyledLevelSenior0>
        ) : user.level === 14 ? (
          <StyledLevelSenior1>Senior</StyledLevelSenior1>
        ) : user.level === 15 ? (
          <StyledLevelSenior2>Senior+</StyledLevelSenior2>
        ) : null}
      </ViewItem>
    </Main>
  );
};

export default ListView;
