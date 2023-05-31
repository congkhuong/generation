import minimist from 'minimist';

type Argument = {
    key: string;
    resource: string;
    [key: string]: any;
};

const argv: Argument = minimist(process.argv.slice(2)) as any;

console.log('argv', argv);

export default argv;
