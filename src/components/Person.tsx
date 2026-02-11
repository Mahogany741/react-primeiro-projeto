type Props = {
    name: string;
    avatar: string;
    roles: string[];
    address?: string;
}

export const Person = ({name, avatar, roles, address}: Props) => {
    return (
        <div className="p-3">
            <h1>{name}</h1>
            <img className="w-60"
                src={avatar}
                alt="Elon Musk"
            />
            <ul>
                <li>{roles[0]}</li>
                <li>{roles[1]}</li>
            </ul>
        </div>
    );
}