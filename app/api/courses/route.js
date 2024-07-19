import { NextResponse } from 'next/server';
import {v4 as uuid4} from 'uuid';
import courses from './data.json';

export async function GET() {
    return NextResponse.json(courses);
}

export async function POST(request) {
    const {title, descrintion, level, link} = await request.json();
    const newCourse = {
        id: uuid4(),
        title,
        descrintion,
        level,
        link
    }

    courses.push(newCourse);

    return NextResponse.json(courses);
}

