import React, { useState } from 'react';
import  MyModal  from '../Modal';
import PropTypes from "prop-types";
import {
    Axis,
    Chart,
    Tooltip,
    Interval,
    Coordinate
} from "bizcharts";


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

    const label = {
        style: {
          fill: '#000000',
          fontSize: 12,
          fontWeight: 'normal',
        }
    }

    const gridii = {
        line: {
            type: 'circle',
            style: {
                lineWidth: 2,
            }
        }
    }

    const labelii = {
        style: {
          fontSize: 0,
        }
    }


    
    
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
                        <Chart height={400} padding="auto" data={addResposta} autoFit>
                            <Interval
                                adjust={[
                                    {
                                        type: 'dodge',
                                        marginRatio: 1,
                                    },
                                ]}
                                color="#2F2462"
                                position="texto*valor"
                            />
                            <Coordinate
                                type="polar"
                            />
                            <Tooltip shared visible={false} />
                            <Axis 
                                name="texto" 
                                visible={true}
                                label={label}
                                grid={null}
                            />
                            <Axis 
                                name="valor" 
                                visible={true}
                                label={labelii}
                                grid={gridii}
                            />
                        </Chart>
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