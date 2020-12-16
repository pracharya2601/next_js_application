import {CauroselWrapper, SingleSlide} from './styled';

export default function({data}) {
    console.log(data)
    return (
        <CauroselWrapper>
            <SingleSlide>
                I am single slide yeyey
            </SingleSlide>
        </CauroselWrapper>
    )
}