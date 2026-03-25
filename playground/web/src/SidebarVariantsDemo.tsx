import { useState, type ReactNode } from 'react'
import { LayoutDashboard, Settings, User, Bell } from 'lucide-react'
import {
  TitanSidebar,
  TitanSidebarFolder,
  TitanSidebarHeader,
  TitanSidebarItem,
  TitanSidebarSearch,
  TitanSidebarSection,
  TitanSidebarTree,
  TitanSidebarTreeItem,
} from 'titan-compositions'

function SidebarFrame({
  title,
  children,
}: {
  title: string
  children: (collapsed: boolean, toggle: () => void) => ReactNode
}) {
  const [collapsed, setCollapsed] = useState(false)
  return (
    <div className="sidebar-variant-column">
      <h4>{title}</h4>
      <div className="sidebar-variant-frame">
        {children(collapsed, () => setCollapsed((c) => !c))}
      </div>
    </div>
  )
}

export function SidebarVariantsDemo() {
  return (
    <div className="sidebar-variants-demo">
      <p className="sidebar-variants-intro">
        Four compositions: plain list, section titles, file tree (folders + nested files), and tree with a top
        search field. Each column has its own expand/collapse control.
      </p>
      <div className="sidebar-variants-grid">
        <SidebarFrame title="Default">
          {(collapsed, onToggle) => (
            <TitanSidebar collapsed={collapsed} onToggle={onToggle} defaultActiveId="def-1">
              <TitanSidebarItem id="def-1" icon={LayoutDashboard}>
                Dashboard
              </TitanSidebarItem>
              <TitanSidebarItem id="def-2" icon={User}>
                Audience
              </TitanSidebarItem>
              <TitanSidebarItem id="def-3" icon={Bell}>
                Alerts
              </TitanSidebarItem>
              <TitanSidebarItem id="def-4" icon={Settings}>
                Settings
              </TitanSidebarItem>
            </TitanSidebar>
          )}
        </SidebarFrame>

        <SidebarFrame title="With section titles">
          {(collapsed, onToggle) => (
            <TitanSidebar collapsed={collapsed} onToggle={onToggle} defaultActiveId="sec-a1">
              <TitanSidebarSection>
                <TitanSidebarHeader>Workspace</TitanSidebarHeader>
                <TitanSidebarItem id="sec-a1" icon={LayoutDashboard}>
                  Dashboard
                </TitanSidebarItem>
                <TitanSidebarItem id="sec-a2" icon={User}>
                  Profile
                </TitanSidebarItem>
              </TitanSidebarSection>
              <TitanSidebarSection>
                <TitanSidebarHeader>Account</TitanSidebarHeader>
                <TitanSidebarItem id="sec-b1" icon={Bell}>
                  Notifications
                </TitanSidebarItem>
                <TitanSidebarItem id="sec-b2" icon={Settings}>
                  Settings
                </TitanSidebarItem>
              </TitanSidebarSection>
            </TitanSidebar>
          )}
        </SidebarFrame>

        <SidebarFrame title="File tree">
          {(collapsed, onToggle) => (
            <TitanSidebar collapsed={collapsed} onToggle={onToggle} defaultActiveId="tree-index">
              <TitanSidebarHeader>Project</TitanSidebarHeader>
              <TitanSidebarTree>
                <TitanSidebarTreeItem id="tree-readme">
                  README.md
                </TitanSidebarTreeItem>
                <TitanSidebarFolder id="fld-src" label="src" defaultExpanded>
                  <TitanSidebarTreeItem id="tree-index">
                    index.ts
                  </TitanSidebarTreeItem>
                  <TitanSidebarFolder id="fld-components" label="components" defaultExpanded>
                    <TitanSidebarTreeItem id="tree-btn">
                      Button.tsx
                    </TitanSidebarTreeItem>
                    <TitanSidebarTreeItem id="tree-card">
                      Card.tsx
                    </TitanSidebarTreeItem>
                  </TitanSidebarFolder>
                </TitanSidebarFolder>
              </TitanSidebarTree>

              <TitanSidebarHeader>Library</TitanSidebarHeader>
              <TitanSidebarTree>
                <TitanSidebarFolder id="fld-hooks" label="hooks" defaultExpanded>
                  <TitanSidebarTreeItem id="tree-useData">
                    useData.ts
                  </TitanSidebarTreeItem>
                  <TitanSidebarTreeItem id="tree-useAuth">
                    useAuth.ts
                  </TitanSidebarTreeItem>
                </TitanSidebarFolder>
              </TitanSidebarTree>
            </TitanSidebar>
          )}
        </SidebarFrame>

        <SidebarFrame title="Complex (search + tree)">
          {(collapsed, onToggle) => (
            <TitanSidebar collapsed={collapsed} onToggle={onToggle} defaultActiveId="cx-index">
              <TitanSidebarSearch placeholder="Search files…" aria-label="Search files" />
              <TitanSidebarHeader>Project</TitanSidebarHeader>
              <TitanSidebarTree>
                <TitanSidebarTreeItem id="cx-readme">
                  README.md
                </TitanSidebarTreeItem>
                <TitanSidebarFolder id="cx-src" label="src" defaultExpanded>
                  <TitanSidebarTreeItem id="cx-index">
                    index.ts
                  </TitanSidebarTreeItem>
                  <TitanSidebarFolder id="cx-ui" label="components" defaultExpanded>
                    <TitanSidebarTreeItem id="cx-sidebar">
                      Sidebar.tsx
                    </TitanSidebarTreeItem>
                    <TitanSidebarTreeItem id="cx-table">
                      Table.tsx
                    </TitanSidebarTreeItem>
                  </TitanSidebarFolder>
                </TitanSidebarFolder>
              </TitanSidebarTree>
            </TitanSidebar>
          )}
        </SidebarFrame>
      </div>
    </div>
  )
}
