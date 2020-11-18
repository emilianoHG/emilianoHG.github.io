import React from 'react'
import SimpleIcons from 'simple-icons-react-component';

import './chip.css'

export default function Chip({ title, icon, color }) {
  
  return (
    <div className="chip" style={{ backgroundColor: color ? color : 'var(--gray)' }}>
        <div className="chip-icon">
            <SimpleIcons name={icon} />
        </div>
        <span>{ title }</span>
    </div>
  )
}
