import React, { useState } from 'react';
import  MyModal  from '../Modal';
import PropTypes from "prop-types";
import { ResponsiveRadar } from '@nivo/radar'


const Container =({
    triggerText,
    valor,
    deNovoOnClick,
    addClientLog,
    addResposta,
    user
}) => {

    const [isShown, setIsShown] = useState(false);
    const [isMostrado, setIsMostrado] = useState(true);
    const [isResult, setIsResult] = useState(false);


    function showModal() {
        setIsShown(true);
        setIsMostrado(false);
        console.log(addResposta);
    };

    function closeModal() {
        setIsShown(false);
        setIsResult(true);
    };

    function modalReturn() {
        setIsMostrado(true);
    }

    function onKeyDown(Event) {
        if (Event.keyCode === 27) {
          closeModal();
        }
    };


    // function onClickOutside(Event) {
    //     if (this.modal && this.modal.contains(Event.target)) {
    //         return closeModal();
    //     }
        
    // };

    // function toggleScrollLock() {
    //     document.querySelector('html').classList.toggle('scroll-lock');
    // };


    
    
        return (
            <React.Fragment>

                {isMostrado ? (
                <button className="btn btn-lg btn-danger center modal-button"  onClick={showModal}> {triggerText} </button>) : (null)}                


                 
                {isShown && !isMostrado ? (
                    <MyModal
                        closeModal={closeModal}
                        onKeyDown={onKeyDown}
                        addClientLog={addClientLog}
                        modalReturn={modalReturn}
                        valor={valor}
                        // onClickOutside={onClickOutside}
                    />
                ) : (null)}


                {isResult && !isShown && !isMostrado ? (                    
                    <div className='result-div'>
                        {console.log(user)}
                        <div className='chart-div'>
                        <ResponsiveRadar
                            data={addResposta}
                            keys={['valor']}
                            indexBy="texto"
                            maxValue="auto"
                            margin={{ top: 70, right: 180, bottom: 40, left: 180 }}
                            curve="linearClosed"
                            borderWidth={2}
                            borderColor={{ from: 'color', modifiers: [] }}
                            gridLevels={4}
                            gridShape="circular"
                            gridLabelOffset={44}
                            enableDots={true}
                            dotSize={6}
                            dotColor={{ theme: 'background' }}
                            dotBorderWidth={2}
                            dotBorderColor={{ from: 'color' }}
                            enableDotLabel={true}
                            dotLabel="value"
                            dotLabelYOffset={-12}
                            colors={{ scheme: 'category10' }}
                            fillOpacity={0.5}
                            blendMode="multiply"
                            animate={true}
                            motionConfig="wobbly"
                            isInteractive={true}
                            // width={500}
                            // height={500}
                            legends={[
                                {
                                    anchor: 'top-left',
                                    direction: 'column',
                                    translateX: -50,
                                    translateY: -40,
                                    itemWidth: 80,
                                    itemHeight: 20,
                                    itemTextColor: '#999',
                                    symbolSize: 12,
                                    symbolShape: 'circle',
                                    effects: [
                                        {
                                            on: 'hover',
                                            style: {
                                                itemTextColor: '#000'
                                            }
                                        }
                                    ]
                                }
                            ]}
                        />
                        </div>
                        <button className='playAgain-button' onClick={deNovoOnClick}>Reiniciar Avaliação</button>
                    </div>
                ):(null)}
            </React.Fragment>
        );
    
}

Container.propTypes = {
    
    triggerText: PropTypes.string.isRequired,
    valor: PropTypes.number.isRequired,
    deNovoOnClick: PropTypes.func.isRequired,
    addClientLog: PropTypes.func.isRequired

};

export default Container;