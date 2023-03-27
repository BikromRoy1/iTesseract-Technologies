import React from 'react';
import Breadcrumb from '../../../Breadcrumb/Breadcrumb';
import team from '../../../../Images/team.jpg';
import AdBoard from '../AdBoard/AdBoard';
import MangTeam from '../mangTeam/MangTeam';

const Team = () => {
  return (
    <div>
      <Breadcrumb
        title='আমাদের টিম মেম্বার '
        subTitle='আমাদের টিম মেম্বার '
        slgs='/team'
        img={team}
      ></Breadcrumb>
      <AdBoard></AdBoard>
      <MangTeam></MangTeam>
    </div>
  );
};

export default Team;
