import { Button } from 'primereact/button';
import TeamCard from '../TeamCard';
        
const List = () => {

  return (
    <>
      <section className='flex flex-wrap gap-3 px-8'>
        <h2 className='w-full flex align-items-center justify-content-between text-2xl'>
          Teams
          {/* <Button label='NOVO TEAM' icon='pi pi-plus' className='text-xs text-white border-primary' outlined /> */}
          <Button label='NOVO TEAM' icon='pi pi-plus' outlined />
        </h2>
        <TeamCard titulo='Nome do Team 1' />
        <TeamCard titulo='Nome do Team 2' />
        <TeamCard titulo='Nome do Team 3' />
        <TeamCard titulo='Nome do Team 4' />
        <TeamCard titulo='Nome do Team 5' />
        <TeamCard titulo='Nome do Team 6' />
        <TeamCard titulo='Nome do Team 7' />
      </section>
    </>
  );
}
 
export default List; 