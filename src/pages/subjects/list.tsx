import { Breadcrumb } from '@/components/refine-ui/layout/breadcrumb';
import { ListView } from '@/components/refine-ui/views/list-view';
import { Input } from '@/components/ui/input';
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from '@/components/ui/select.tsx';
import { Search } from 'lucide-react';
import { useState, useMemo } from 'react';
import { DEPT_OPTIONS } from '../../constants/index';
import React from 'react';
import { CreateButton } from '@/components/refine-ui/buttons/create';
import { DataTable } from '@/components/refine-ui/data-table/data-table';
import { useTable } from '@refinedev/react-table';
import { Subject } from '@/types';
import { ColumnDef } from '@tanstack/react-table';
import { Badge } from '@/components/ui/badge';

const SubjectList = () => {

    const [SearchQuery, setSearchQuery] = useState('');
    const [selectedDepartment, setSelectedDepartment] = useState('all');

    const departmentFilter = selectedDepartment === 'all' ? [] : [ { field: 'dept', operator: 'eq' as const, value: selectedDepartment } ];
    const searchFilter = SearchQuery ? [ { field: 'name', operator: 'contains' as const, value: SearchQuery } ] : [];

    const subjectTable = useTable<Subject>({
        columns: useMemo<ColumnDef<Subject>[]>(()=>[
            {
                id: 'code',
                accessorKey:'code',
                size:100,
                header: () => <p className='column-title ml-2'>Code</p>,
                cell: ({ getValue }) => <Badge>{getValue<string>()}</Badge>
            },
            {
                id: 'name',
                accessorKey: 'name',
                size: 200,
                header: () => <p className='column-title'>Name</p>,
                cell: ({ getValue }) => <span className='text-foreground'>{getValue<string>()}</span>,
                filterFn: 'includesString',
            },
            {
                id: 'department',
                accessorKey: 'dept',
                size: 150,
                header: () => <p className='column-title'>Department</p>,
                cell: ({ getValue }) => <Badge variant="secondary">{getValue<string>()}</Badge>
            },
            {
                id: 'description',
                accessorKey: 'description',
                size: 300,
                header: () => <p className='column-title'>Description</p>,
                cell: ({ getValue }) => <span className='truncate line-clamp-2'>{getValue<string>()}</span>
            }
        ], []),
        refineCoreProps: {
            resource: 'subjects',
            pagination: {pageSize:10, mode:'server'},
            filters:{
                permanent: [...departmentFilter, ...searchFilter]
            },
            sorters:{
                initial: [
                    { field: 'id', order: 'desc' },
                ]
            }
        }
    });

  return (
    <ListView>
        <Breadcrumb />

        <h1 className='page-title'>Subjects</h1>

        <div className='intro-row'>
            <p className='m-0 flex items-center'>Quick Access To Essential Metrics And All Tools</p>
            <div className='actions-row'>
                <div className='search-field'>
                    <Search className='search-icon'/>

                    <Input type="text"
                    placeholder='Search By Name'
                    className='pl-10 w-full'
                    value={SearchQuery}
                    onChange={(e) => setSearchQuery(e.target.value)} />
                </div>

                <div className='flex flex-row gap-2'>
                    <Select 
                    value={selectedDepartment}
                    onValueChange={setSelectedDepartment}>
                        <SelectTrigger>
                            <SelectValue placeholder="Filter By Department..."/>
                        </SelectTrigger>
                        <SelectContent>
                            <SelectItem value='all'>
                                All Department
                            </SelectItem>
                            {
                                DEPT_OPTIONS.map((dept) => (
                                    <SelectItem value={dept.value} key={dept.value}>
                                        {dept.label}
                                    </SelectItem>
                                ))
                            }
                        </SelectContent>
                    </Select>

                    <CreateButton />
                </div>
            </div>
        </div>

        <DataTable table={subjectTable}/>
    </ListView>
  )
}

export default SubjectList