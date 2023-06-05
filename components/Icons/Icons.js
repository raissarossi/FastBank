import { Ionicons } from '@expo/vector-icons';
import { styled } from 'nativewind';
const Icons = ({ collection, iconName, color, size, classN}) => {
    const Icons = styled(collection)
    return (
        <Icons name={iconName} size={size} className={classN} color={color}/>
    );
}

export default Icons;