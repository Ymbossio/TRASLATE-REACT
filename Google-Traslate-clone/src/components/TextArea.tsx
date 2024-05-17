import { Form } from 'react-bootstrap'
import { SectionType } from '../types.d'

interface Props {
    type: SectionType 
    placeholder: string
    loading?:boolean, 
    onChange: (value: string) => void
    value: string
}

const commonStyles ={border: 0, height: '200px'}

export const Textarea = ({placeholder, type, loading, value, onChange}: Props) => {
    
    const style = type === SectionType.From ? {...commonStyles, backgroundColor: '#f5f5f5'}
    : commonStyles
    return (

        <Form.Control
        as='textarea'
        autoFocus={type == SectionType.From}
        placeholder={placeholder}
        style={style}
        ></Form.Control>
    )
}