export interface ProjectFile {
  id: string;
  name: string;
  language: 'html' | 'css' | 'javascript' | 'json';
  content: string;
}

export interface ProjectData {
  id: string;
  files: ProjectFile[];
  activeFileId: string;
  updatedAt: number;
}

export async function saveProject(data: ProjectData): Promise<void> {
  if (typeof window === 'undefined') return;
  localStorage.setItem(`juba_project_${data.id}`, JSON.stringify(data));
}

export async function loadProject(id: string): Promise<ProjectData | null> {
  if (typeof window === 'undefined') return null;
  const saved = localStorage.getItem(`juba_project_${id}`);
  if (!saved) return null;
  try {
    return JSON.parse(saved);
  } catch (e) {
    console.error('Failed to parse saved project', e);
    return null;
  }
}
