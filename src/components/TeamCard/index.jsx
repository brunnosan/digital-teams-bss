import { Button } from 'primereact/button';
import { Card } from 'primereact/card';

const TeamCard = ({ titulo }) => {

  const title = (nome) => (
    <>
      <div className='flex justify-content-between align-items-center text-lg'>
        {nome}
        <i className='pi pi-eye' />
      </div>
    </>
  )

  const footer = (
    <div className='flex gap-3'>
      <Button label='ADICIONAR' className='flex-1 px-0 text-xs border-primary' outlined/>
      <Button icon='pi pi-trash' className='text-xs border-primary' outlined/>
    </div>
  )

  return (
    <>
    {/* Lembrando que o gap-3 (do compomnente List) é em rem, ou seja, 48px. Nesse caso, o width considera 20% (5 cards) menos o gap em px menos 1px */}
        <Card title={title(titulo)} footer={footer} style={{width: "calc(20% - 12px - 1px)"}}>
          <span className='mx-auto bg-primary bg-gr ay-900 w-6rem h-6rem block border-circle align-content-center'>
            <span className='mx-auto flex flex-column text-center text-6xl'>
              0
              <span className='text-sm'>/ 0</span>
            </span>
          </span>
        </Card>
    </>
  );
}
 
export default TeamCard;