import * as d3 from 'd3';
import { useEffect } from 'preact/hooks';

export default function OrganizationChart({ data }: { data: any }) {
  const width = 1000;
  const height = 700;
  const nodeRadius = 14;
  const colors = {
    root: '#4e79a7',
    branch: '#59a14f',
    leaf: '#e15759',
    link: '#bab0ac',
    text: '#2e2e2e'
  };

  useEffect(() => {
    if (!data) return;

    const root = d3.hierarchy(data);
    const treeLayout = d3.tree().size([height, width - 320]);
    treeLayout(root);

    const svg = d3.select('#org-chart')
      .attr('width', width)
      .attr('height', height)
      .attr('viewBox', [-160, 0, width, height]);

    // Draw links
    svg.append('g')
      .selectAll('path')
      .data(root.links())
      .join('path')
      .attr('fill', 'none')
      .attr('stroke', colors.link)
      .attr('stroke-width', 2)
      .attr('stroke-opacity', 0.6)
      .attr('d', d3.linkHorizontal<d3.HierarchyLink<any>, d3.HierarchyNode<any>>()
        .x(d => d.y || 0)
        .y(d => d.x || 0)
        .source(d => d.source)
        .target(d => d.target)
      );

    // Draw nodes
    const node = svg.append('g')
      .selectAll('g')
      .data(root.descendants())
      .join('g')
      .attr('transform', d => `translate(${d.y},${d.x})`);

    node.append('circle')
      .attr('r', nodeRadius)
      .attr('fill', d => d.depth === 0 ? colors.root : d.children ? colors.branch : colors.leaf)
      .attr('stroke', '#fff')
      .attr('stroke-width', 2);

    node.append('text')
      .attr('dy', '0.31em')
      .attr('x', d => d.children ? -(nodeRadius + 5) : nodeRadius + 5)
      .attr('text-anchor', d => d.children ? 'end' : 'start')
      .attr('fill', colors.text)
      .attr('font-family', 'sans-serif')
      .attr('font-size', '12px')
      .attr('font-weight', d => d.depth === 0 ? 'bold' : 'normal')
      .text(d => d.data.name);
  }, [data]);

  return (
    <div style={{ backgroundColor: '#f8f8f8', padding: '20px', borderRadius: '8px' }}>
      <svg id="org-chart" style={{ display: 'block', margin: '0 auto' }} />
    </div>
  );
}
